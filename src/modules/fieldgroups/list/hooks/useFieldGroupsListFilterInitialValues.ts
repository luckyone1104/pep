import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { FIELD_GROUPS_FILTER_INITIAL_VALUES, FieldGroupListQueryParam } from '../const';
import { parseTrueOrFalseSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useFieldGroupsListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (
				key === FieldGroupListQueryParam.Search ||
				key === FieldGroupListQueryParam.CountFrom ||
				key === FieldGroupListQueryParam.CountTo
			) {
				acc[key] = value as string;
			}

			if (key === FieldGroupListQueryParam.IsNotEmpty) {
				acc[key] = parseTrueOrFalseSelectFieldInitialValue(value as string);
			}

			return acc;
		}, { ...FIELD_GROUPS_FILTER_INITIAL_VALUES });
};
