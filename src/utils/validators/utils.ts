export const joinValidationErrors = (errors: string[]) => {
	const lowerCasedErrors = errors.map((item, index) => {
		return index === 0
			? item
			: item.toLowerCase();
	});

	return lowerCasedErrors.join(', ');
};