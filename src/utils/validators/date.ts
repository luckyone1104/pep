import { isDateType, isNull, isValidDate } from '../checkers';
import { formatDate } from '../formatDate';

type DateProps = {
	min?: Date,
	max?: Date,
}

export const date = (
	{
		min,
		max,
	}: DateProps = {},
) => {
	return (value: unknown) => {
		if (isNull(value)) {
			return;
		}

		if (!isDateType(value) || !isValidDate(value)) {
			return 'Invalid date';
		}

		if (min && value.getTime() < min.getTime()) {
			return `Minimum date is ${formatDate(min)}`;
		}

		if (max && value.getTime() > max.getTime()) {
			return `Maximum date is ${formatDate(max)}`;
		}
	};
};