import React, { FC } from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';
import { FieldHookConfig } from 'formik/dist/Field';
import { TextFieldProps } from '@mui/material/TextField/TextField';

type TextBoxFieldProps = Omit<FieldHookConfig<string>, keyof TextFieldProps> & TextFieldProps;

export const TextBoxField: FC<TextBoxFieldProps> = (props) => {
	const [field, {
		error,
		touched
	// @ts-ignore
	}] = useField(props);

	const showValidationError = touched && !!error;

	return (
		<>
			<TextField
				{...field}
				{...props}
				error={showValidationError}
				helperText={error}
				fullWidth
				variant="filled"
			/>
		</>
	);
};
