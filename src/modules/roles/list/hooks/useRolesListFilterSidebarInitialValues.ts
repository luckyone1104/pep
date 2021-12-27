import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { ROLES_FILTER_INITIAL_VALUES, RolesListQueryParam } from '../const';

export const useRolesListFilterSidebarInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === RolesListQueryParam.IsPrimary) {
				acc[key] = value as string; //todo: boolean?
			}

			if (key === RolesListQueryParam.UsersCountFrom) {
				acc[key] = value as string; //todo: number?
			}

			if (key === RolesListQueryParam.UsersCountTo) {
				acc[key] = value as string; //todo: number?
			}

			if (key === RolesListQueryParam.Search) {
				acc[key] = value as string;
			}

			return acc;
		}, { ...ROLES_FILTER_INITIAL_VALUES });
};
