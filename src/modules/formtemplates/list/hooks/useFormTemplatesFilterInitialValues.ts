import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { FormTemplatesQueryParam, SIDEBAR_FORM_INITIAL_VALUES } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useFormTemplatesFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === FormTemplatesQueryParam.Search) {
				acc[key] = value as string;
			}

			if (key === FormTemplatesQueryParam.StatusIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			return acc;
		}, { ...SIDEBAR_FORM_INITIAL_VALUES });
};
