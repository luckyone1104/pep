import { get } from '../../../api';
import { PROJECTS_DROPDOWN_ITEMS_URL } from './const';
import { DropdownItem } from '../../../types';

export const getProjectsDropdownItems = async () => {
	const response = await get<DropdownItem[]>(PROJECTS_DROPDOWN_ITEMS_URL);

	return response.data;
};
