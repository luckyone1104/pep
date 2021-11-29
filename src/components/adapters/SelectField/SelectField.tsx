import React, { FC } from 'react';
import { useField, useFormikContext } from 'formik';
import { FieldHookConfig } from 'formik/dist/Field';
import { SelectItem, SelectValue } from './types';
import { FormControl, FormHelperText, InputLabel, ListItemText, MenuItem, Select } from '@mui/material';
import { SelectProps } from '@mui/material/Select/Select';
import { FieldInputProps } from 'formik/dist/types';

type DropdownFieldProps = {
	fieldProps: FieldHookConfig<SelectValue>;
	required?: boolean;
} & Omit<SelectProps, keyof Omit<FieldInputProps<SelectValue>, 'multiple'> | 'label'> & {
	label?: string;
	items: SelectItem[];
};

export const SelectField: FC<DropdownFieldProps> = (
	{
		fieldProps,
		required,
		...props
	},
) => {
	const [field, {
		error,
		touched,
	}] = useField(fieldProps);
	const { initialValues } = useFormikContext();
	const { label, items } = props;
	// @ts-ignore
	const defaultValue = initialValues[field.name];
	const showValidationError = touched && !!error;

	return (
		<FormControl fullWidth error={showValidationError}>
			<InputLabel id={label} required={required}>{label}</InputLabel>
			<Select
				{...field}
				error={showValidationError}
				labelId={label}
				label={label}
			>
				<MenuItem value={defaultValue}>
					<ListItemText primary="-" />
				</MenuItem>
				{items.map(({ id, value }) => (
					<MenuItem
						key={id}
						value={id}
					>
						{value}
					</MenuItem>
				))}
			</Select>
			{showValidationError && (
				<FormHelperText>{error}</FormHelperText>
			)}
		</FormControl>
	);
};