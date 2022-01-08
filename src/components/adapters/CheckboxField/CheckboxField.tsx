import React, { FC } from 'react';
import { FieldHookConfig } from 'formik/dist/Field';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxProps } from '@mui/material/Checkbox/Checkbox';
import { useField } from 'formik';

type CheckboxFieldProps = {
	fieldProps: FieldHookConfig<boolean>;
} & CheckboxProps & {
		label?: string;
	};

export const CheckboxField: FC<CheckboxFieldProps> = ({
	fieldProps,
	label,
	...props
}) => {
	const [field] = useField(fieldProps);

	return (
		<FormControlLabel
			control={<Checkbox {...field} {...props} />}
			label={label}
		/>
	);
};
