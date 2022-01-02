import { CustomObject } from '../../types';

const getEmptyValueOfProperType = (value: unknown) => {
	if (typeof value === 'string' || typeof value === 'number') {
		return '';
	}

	if (Array.isArray(value)) {
		return [];
	}

	return null;
};

export const getCleanFormValues = (values: CustomObject) => {
	const cleanValues = {};

	Object.entries(values).forEach(([key, value]) => {
		if (Object.prototype.hasOwnProperty.call(values, key)) {
			// @ts-ignore
			cleanValues[key] = getEmptyValueOfProperType(value);
		}
	});

	return cleanValues;
};
