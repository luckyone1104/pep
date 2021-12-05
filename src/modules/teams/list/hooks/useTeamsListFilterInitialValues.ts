import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { TEAMS_FILTER_INITIAL_VALUES, TeamsListQueryParam } from '../const';

export const useTeamsListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === TeamsListQueryParam.ProjectIds) {
				acc[key] = Array.isArray(value)
					? value.map(i => +i)
					: [+value];
			}

			if (key === TeamsListQueryParam.Search) {
				acc[key] = value as string;
			}

			return acc;
		}, { ...TEAMS_FILTER_INITIAL_VALUES });
};