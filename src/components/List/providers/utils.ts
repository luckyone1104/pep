import { CustomObject } from '../../../types';
import { isEmptyString } from '../../../utils';

export const parseSortValue = (value: 'asc' | 'desc'): 1 | 2 => {
	return value === 'asc'
		? 1
		: 2;
};

export const normalizeSortValue = (value: '1' | '2') => {
	return value === '1'
		? 'asc'
		: 'desc';
};

export const getNormalizedQueryParams = (filterData: CustomObject) => {
	const filterValuesToBeExcluded = [
		'null',
		'undefined',
	];

	const shouldExclude = (value: unknown) => {
		if (typeof value === 'string' && isEmptyString(value)) {
			return true;
		}

		if (filterValuesToBeExcluded.includes(String(value))) {
			return true;
		}

		return false;
	};

	return Object.entries(filterData)
		.reduce((acc, [key, value]) => {
			if (shouldExclude(value)) {
				return acc;
			}

			return {
				...acc,
				[key]: value
			};
		}, {});
};
