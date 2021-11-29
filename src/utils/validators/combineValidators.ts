import { isUndefined } from '../checkers';
import { joinValidationErrors } from './utils';

type Validator = (value: unknown) => undefined | string;

export const combineValidators = (...validators: Validator[]) => {
	return (value: unknown) => {
		const errors: string[] = [];

		validators.forEach((validator) => {
			const _error = validator(value);

			if (!isUndefined(_error)) {
				errors.push(_error);
			}
		});

		return joinValidationErrors(errors);
	};
};