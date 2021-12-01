import { isEmpty } from '../../utils';

const parseValue = (value: unknown): string | undefined => {
	if (typeof value === 'string') {
		return value;
	}

	if (Array.isArray(value)) {
		return value.join(',');
	}
};

export const getChipLabel = (key: string, value: unknown) => {
	const parsedValue = parseValue(value);

	if (isEmpty(parsedValue)) {
		return key;
	}

	return `${key}: ${parseValue(value)}`;
};
