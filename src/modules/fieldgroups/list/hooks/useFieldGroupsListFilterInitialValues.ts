import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { FIELD_GROUPS_FILTER_INITIAL_VALUES, FieldGroupListQueryParam } from '../const';

export const useFieldGroupsListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === FieldGroupListQueryParam.IsNotEmpty) {
				acc[key] = value as string; //todo: boolean?
			}

			if (key === FieldGroupListQueryParam.CountFrom) {
				acc[key] = value as string;
			}

			if (key === FieldGroupListQueryParam.CountTo) {
				acc[key] = value as string;
			}

			if (key === FieldGroupListQueryParam.Search) {
				acc[key] = value as string;
			}

			return acc;
		}, { ...FIELD_GROUPS_FILTER_INITIAL_VALUES });
};
