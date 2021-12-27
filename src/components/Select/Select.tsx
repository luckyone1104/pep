import React, { FC } from 'react';
import {
	CircularProgress,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select as MuiSelect
} from '@mui/material';
import { SelectProps as MuiSelectProps } from '@mui/material/Select/Select';
import { SelectItem } from './types';

export type SelectProps = Omit<MuiSelectProps, 'label'> & {
	items: SelectItem[];
	label?: string;
	errors?: string[];
	isLoading?: boolean;
	required?: boolean;
}

export const Select: FC<SelectProps> = (
	{
		items,
		label,
		errors = [],
		isLoading,
		required,
		...selectProps
	}
) => {
	const hasError = errors.length > 0;
	const isItemsEmpty = items.length === 0;

	return (
		<FormControl
			fullWidth
			error={hasError}
			sx={{ position: 'relative' }}
		>
			{label && (
				<InputLabel
					id={label}
					required={required}
				>
					{label}
				</InputLabel>
			)}
			<MuiSelect
				{...selectProps}
				labelId={label}
				label={label}
			>
				{!selectProps.multiple && (
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
				)}
				{isItemsEmpty && (
					<MenuItem disabled>
						<em>No items available</em>
					</MenuItem>
				)}
				{items.map(({ id, value }) => (
					<MenuItem
						key={id}
						value={id}
					>
						{value}
					</MenuItem>
				))}
			</MuiSelect>
			{errors.map((error) => (
				<FormHelperText key={error}>{error}</FormHelperText>
			))}
			{isLoading && (
				<CircularProgress
					size={24}
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						marginTop: '-12px',
						marginLeft: '-12px',
					}}
				/>
			)}
		</FormControl>
	);
};
