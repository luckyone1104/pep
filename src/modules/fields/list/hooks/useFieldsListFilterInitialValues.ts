import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { FIELD_FILTER_INITIAL_VALUES, FieldsListQueryParam } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useFieldsListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (
				key === FieldsListQueryParam.TypeIds ||
				key === FieldsListQueryParam.AssesmentGroupIds
			) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (key === FieldsListQueryParam.Search) {
				acc[key] = value as string;
			}

			return acc;
		}, { ...FIELD_FILTER_INITIAL_VALUES });
};