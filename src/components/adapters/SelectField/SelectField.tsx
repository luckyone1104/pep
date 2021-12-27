import React, { FC } from 'react';
import { useField } from 'formik';
import { FieldHookConfig } from 'formik/dist/Field';
import { SelectItem, SelectValue } from './types';
import { CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectProps } from '@mui/material/Select/Select';
import { FieldInputProps } from 'formik/dist/types';

type DropdownFieldProps = {
	fieldProps: FieldHookConfig<SelectValue>;
	required?: boolean;
	isLoading?: boolean;
	customError?: false | string;
} & Omit<SelectProps, keyof Omit<FieldInputProps<SelectValue>, 'multiple'> | 'label'> & {
	label?: string;
	items: SelectItem[];
};

export const SelectField: FC<DropdownFieldProps> = (
	{
		fieldProps,
		required,
		isLoading,
		customError,
		...props
	},
) => {
	const [field, {
		error,
		touched,
	}] = useField(fieldProps);
	const { label, items, multiple, disabled } = props;
	const hasValidationError = touched && !!error;
	const hasCustomError = !!customError;
	const isDisabled = isLoading || hasCustomError || disabled;
	const hasError = hasValidationError || hasCustomError;
	const isMultipleEmpty = multiple && items.length === 0;

	return (
		<FormControl
			fullWidth
			error={hasError}
			sx={{ position: 'relative' }}
		>
			<InputLabel id={label} required={required}>{label}</InputLabel>
			<Select
				{...field}
				{...props}
				labelId={label}
				label={label}
				disabled={isDisabled}
			>
				{!multiple && (
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
				)}
				{isMultipleEmpty && (
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
			</Select>
			{hasValidationError && (
				<FormHelperText>{error}</FormHelperText>
			)}
			{hasCustomError && (
				<FormHelperText>{customError}</FormHelperText>
			)}
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
