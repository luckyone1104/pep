export const isNull = (value: unknown): value is null => {
	return value === null;
};

export const isUndefined = (value: unknown): value is undefined => {
	return typeof value === 'undefined';
};

export const isNullOrUndefined = (value: unknown): value is null | undefined => {
	return isNull(value) || isUndefined(value);
};

export const isEmptyString = (value: string) => {
	return value.trim().length === 0;
};

export const isEmpty = (value: unknown) => {
	return (
		isNullOrUndefined(value) ||
		((typeof value === 'string') && isEmptyString(value)) ||
		(Array.isArray(value) && value?.length === 0)
	);
};

export const isDateType = (value: unknown): value is Date => {
	return value instanceof Date;
};

export const isValidDate = (value: Date | string): boolean => {
	value = value.toString();

	return !Number.isNaN(Date.parse(value.toString()));
};
