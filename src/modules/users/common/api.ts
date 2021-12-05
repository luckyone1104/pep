import { get } from '../../../api';
import { ROLES_DROPDOWN_ITEMS_URL } from './const';
// import { DropdownItem } from '../../../types';

export const getRolesDropdownItems = async () => {
	const response = await get<{ id: number; name: string; }/*DropdownItem*/[]>(ROLES_DROPDOWN_ITEMS_URL);

	return response.data;
};