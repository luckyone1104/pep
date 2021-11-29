import { isUndefined } from '../checkers';

type LengthProps = {
	min?: number;
	max?: number;
}

export const length = (
	{
		min,
		max,
	}: LengthProps = {},
) => {
	return (value: unknown) => {
		if (typeof value !== 'string' && !Array.isArray(value)) {
			return;
		}

		if (!isUndefined(min) && value.length < min) {
			return `Minimum length is ${min}`;
		}

		if (!isUndefined(max) && value.length > max) {
			return `Maximum length is ${max}`;
		}
	};
};