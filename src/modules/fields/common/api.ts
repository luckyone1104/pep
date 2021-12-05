import { get } from '../../../api';
import { ASSESSMENT_GROUPS_URL, FIELDS_TYPES_URL } from './const';
// import { DropdownItem } from '../../../types';

export const getFieldsTypes = async () => {
	const response = await get<{ id: number; name: string; }/*DropdownItem*/[]>(FIELDS_TYPES_URL);

	return response.data;
};

export const getAssessmentGroups = async () => {
	const response = await get<{ id: number; name: string; }/*DropdownItem*/[]>(ASSESSMENT_GROUPS_URL);

	return response.data;
};