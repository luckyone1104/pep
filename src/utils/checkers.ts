export const isNull = (value: unknown): value is null => {
	return value === null;
};

export const isUndefined = (value: unknown): value is undefined => {
	return typeof value === 'undefined';
};

export const isNullOrUndefined = (value: unknown): value is null | undefined => {
	return isNull(value) || isUndefined(value);
};

export const isEmpty = (value: unknown)  => {
	return (
		isNullOrUndefined(value) ||
		value === '' ||
		(Array.isArray(value) && value?.length === 1) ||
		(value && typeof value === 'object' && Object.keys(value).length === 0)
	);
};