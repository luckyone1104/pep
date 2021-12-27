export const parseMultiSelectFieldInitialValue = (value: string | string[]) => {
	return Array.isArray(value)
		? value.map(i => +i)
		: [+value];
};
