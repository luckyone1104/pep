import { get } from '../../../api';
import { FORM_TEMPLATES_STATUSES_URL } from './const';
import { DropdownItem } from '../../../types';

export const getFormTemplatesStatuses = async () => {
	const response = await get<DropdownItem[]>(FORM_TEMPLATES_STATUSES_URL);

	return response.data;
};
