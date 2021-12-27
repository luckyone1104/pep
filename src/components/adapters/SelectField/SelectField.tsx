import React, { FC, useMemo } from 'react';
import { useField } from 'formik';
import { FieldHookConfig } from 'formik/dist/Field';
import { SelectFormValue } from './types';
import { FieldInputProps } from 'formik/dist/types';
import { Select } from '../../Select';
import { isNullOrUndefined } from '../../../utils';
import { SelectProps } from '../../Select/Select';

type DropdownFieldProps = Omit<SelectProps, keyof Omit<FieldInputProps<SelectFormValue>, 'multiple'>> & {
	fieldProps: FieldHookConfig<SelectFormValue>;
	customError?: string | null;
};

export const SelectField: FC<DropdownFieldProps> = (
	{
		fieldProps,
		required,
		isLoading,
		customError,
		label,
		items,
		disabled,
	},
) => {
	const [{
		name,
		onBlur,
		onChange,
		value
	}, {
		error,
		touched,
	}] = useField(fieldProps);
	const hasValidationError = touched && !!error;
	const isDisabled = isLoading || Boolean(customError) || disabled;

	const errors = useMemo(() => {
		const _errors = [];

		if (hasValidationError) {
			_errors.push(error);
		}

		if (!isNullOrUndefined(customError)) {
			_errors.push(customError);
		}

		return _errors;
	}, [customError, error, hasValidationError]);

	return (
		<Select
			name={name}
			onBlur={onBlur}
			onChange={onChange}
			value={value}
			items={items}
			label={label}
			errors={errors}
			isLoading={isLoading}
			required={required}
			disabled={isDisabled}
		/>
	);
};
