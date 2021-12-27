export const parseMultiSelectFieldInitialValue = (value: string | string[]) => {
	return Array.isArray(value)
		? value.map(i => +i)
		: [+value];
};

export const parseTrueOrFalseSelectFieldInitialValue = (value: string) => {
	switch (value) {
	case '0':
		return 0;
	case '1':
		return 1;
	default:
		return '';
	}
};
