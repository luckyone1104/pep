import React, { FC } from 'react';
import { useField } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';
import { FieldHookConfig } from 'formik/dist/Field';
import { FieldInputProps } from 'formik/dist/types';

type TextBoxFieldProps = {
	fieldProps: FieldHookConfig<string>,
} & Omit<TextFieldProps, keyof FieldInputProps<string>>;

export const TextBoxField: FC<TextBoxFieldProps> = (
	{
		fieldProps,
		...props
	},
) => {
	const [field, {
		error,
		touched,
	}] = useField(fieldProps);

	const showValidationError = touched && !!error;

	return (
		<TextField
			{...field}
			{...props}
			error={showValidationError}
			helperText={showValidationError ? error : null}
			fullWidth
			// variant="filled"
		/>
	);
};
