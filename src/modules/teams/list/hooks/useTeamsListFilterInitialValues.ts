import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { TEAMS_FILTER_INITIAL_VALUES, TeamsListQueryParam } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';

export const useTeamsListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams).reduce(
		(acc, [key, value]) => {
			if (key === TeamsListQueryParam.ProjectIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (key === TeamsListQueryParam.Search) {
				acc[key] = value as string;
			}

			return acc;
		},
		{ ...TEAMS_FILTER_INITIAL_VALUES }
	);
};
