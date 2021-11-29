import React, { FC } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import { FieldHookConfig } from 'formik/dist/Field';
import { DatePickerProps } from '@mui/lab/DatePicker/DatePicker';
import { useField, useFormikContext } from 'formik';
import { FieldInputProps } from 'formik/dist/types';

type DatePickerFieldProps = {
	fieldProps: FieldHookConfig<Date>;
	required?: boolean;
} & Omit<DatePickerProps<Date>, keyof FieldInputProps<Date> | 'renderInput'>
	& React.RefAttributes<HTMLDivElement>;

export const DatePickerField: FC<DatePickerFieldProps> = (
	{
		fieldProps,
		required,
		...props
	},
) => {
	const [field, {
		touched,
		error,
	}] = useField(fieldProps);
	const { setFieldValue, setFieldTouched } = useFormikContext();
	const handleChange = (value: Date | null) => {
		setFieldTouched(field.name, true);
		setFieldValue(field.name, value);
	};
	const showValidationError = touched && !!error;
	// console.log('error', error);

	return (
		<DatePicker
			{...field}
			{...props}
			onChange={handleChange}
			mask="__.__.____"
			renderInput={(params) => (
				<TextField
					{...params}
					error={showValidationError}
					required={required}
					helperText={error}
				/>
			)}
		/>
	);
};