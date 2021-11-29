import React, { FC } from 'react';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import { FieldHookConfig } from 'formik/dist/Field';
import { DatePickerProps } from '@mui/lab/DatePicker/DatePicker';
import { useField, useFormikContext } from 'formik';
import { FieldInputProps } from 'formik/dist/types';

type DatePickerFieldProps = {
	fieldProps: FieldHookConfig<Date>
} & Omit<DatePickerProps<Date>, keyof FieldInputProps<Date> | 'renderInput'>
	& React.RefAttributes<HTMLDivElement>;

export const DatePickerField: FC<DatePickerFieldProps> = (
	{
		fieldProps,
		...props
	},
) => {
	const [field] = useField(fieldProps);
	const { setFieldValue } = useFormikContext();
	const handleChange = (value: Date | null) => {
		setFieldValue(field.name, value);
	};

	return (
		<DatePicker
			{...field}
			{...props}
			onChange={handleChange}
			mask="__.__.____"
			renderInput={(params) => <TextField {...params} />}
		/>
	);
};