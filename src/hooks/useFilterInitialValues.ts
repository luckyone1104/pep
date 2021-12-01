import { useListUrlQueryParamsContext } from '../components/List/hooks/useListUrlQueryParamsContext';

type UseFilterInitialValues = <T>(defaultInitialValues: T) => T;

export const useFilterInitialValues: UseFilterInitialValues = (defaultInitialValues) => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (Object.prototype.hasOwnProperty.call(defaultInitialValues, key)) {
				// @ts-ignore
				if (Array.isArray(defaultInitialValues[key]) && !Array.isArray(value)) {
					// @ts-ignore
					acc[key] = [value];
				} else {
					// @ts-ignore
					acc[key] = value;
				}
			}

			return acc;
		}, { ...defaultInitialValues } as typeof defaultInitialValues);
};
