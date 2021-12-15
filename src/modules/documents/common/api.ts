import { get } from '../../../api';
import { DOCUMENTS_TYPES_URL } from './const';


export const getDocumentsTypes = async () => {
	const response = await get<{ id: number; name: string; }/*DropdownItem*/[]>(DOCUMENTS_TYPES_URL);

	return response.data;
};
