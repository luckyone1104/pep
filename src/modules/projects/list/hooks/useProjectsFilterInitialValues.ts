import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { ProjectsListQueryParam, SIDEBAR_FORM_INITIAL_VALUES } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useProjectsFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === ProjectsListQueryParam.CoordinatorIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (key === ProjectsListQueryParam.Search) {
				acc[key] = value as string;
			}

			return acc;
		}, { ...SIDEBAR_FORM_INITIAL_VALUES });
};
