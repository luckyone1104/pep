import { useMemo } from 'react';
import { useListUrlQueryParamsContext } from '../components/List/hooks/useListUrlQueryParamsContext';

type UseFilterInitialValues = <T>(defaultInitialValues: T) => Record<keyof T, unknown>;

export const useFilterInitialValues: UseFilterInitialValues = (defaultInitialValues) => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return useMemo(() => {
		const initialValues = defaultInitialValues;

		Object.entries(urlQueryParams)
			.forEach(([key, value]) => {
				if (Object.prototype.hasOwnProperty.call(initialValues, key)) {
					// @ts-ignore
					initialValues[key] = value;
				}
			});

		return initialValues;
	}, [urlQueryParams, defaultInitialValues]);

};