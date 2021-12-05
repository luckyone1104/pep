import { useQuery } from 'react-query';
import { ROLES_DROPDOWN_ITEMS_URL } from '../const';
import { getRolesDropdownItems } from '../api';

export const useRolesDropdownItems = () => {
	const query = useQuery(ROLES_DROPDOWN_ITEMS_URL, getRolesDropdownItems);

	return {
		...query,
		data: query.data?.map(({ id, name }) => ({
			id,
			value: name,
		})) || [],
	};
};