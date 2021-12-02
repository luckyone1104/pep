import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { FormTemplatesQueryParam, SIDEBAR_FORM_INITIAL_VALUES } from '../const';

export const useFormTemplatesFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === FormTemplatesQueryParam.StatusIds) {
				acc[key] = Array.isArray(value)
					? value.map(i => +i)
					: [+value];
			}

			if (key === FormTemplatesQueryParam.Search) {
				acc[key] = value as string;
			}

			return acc;
		}, { ...SIDEBAR_FORM_INITIAL_VALUES });
};
