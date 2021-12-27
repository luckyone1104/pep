import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { USERS_FILTER_INITIAL_VALUES, UsersListQueryParam } from '../const';
import { parseMultiSelectFieldInitialValue } from '../../../../components/adapters/SelectField/utils';


export const useUsersListFilterInitialValues = () => {
	const { urlQueryParams } = useListUrlQueryParamsContext();

	return Object.entries(urlQueryParams)
		.reduce((acc, [key, value]) => {
			if (key === UsersListQueryParam.RoleIds) {
				acc[key] = parseMultiSelectFieldInitialValue(value);
			}

			if (key === UsersListQueryParam.Search) {
				acc[key] = value as string;
			}

			if (key === UsersListQueryParam.NextPEDate) {
				acc[key] = new Date(value as string);
			}

			return acc;
		}, { ...USERS_FILTER_INITIAL_VALUES });
};