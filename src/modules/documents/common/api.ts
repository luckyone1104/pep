import { get } from '../../../api';
import { DOCUMENTS_TYPES_URL, DOCUMENTS_USERS_URL } from './const';
import { DropdownItem } from '../../../types';

export const getDocumentsTypes = async () => {
	const response = await get<{ id: number; name: string } /*DropdownItem*/[]>(
		DOCUMENTS_TYPES_URL
	);

	return response.data;
};

export const getDocumentsUsers = async () => {
	const response = await get<DropdownItem[]>(DOCUMENTS_USERS_URL);

	return response.data;
};
