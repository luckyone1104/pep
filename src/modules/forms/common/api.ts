import {
	FORMS_ASSIGNEES_URL,
	FORMS_REVIEWERS_URL,
	FORMS_STATES_URL,
} from './const';
import { get } from '../../../api';
import { DropdownItem } from '../../../types';

export const getFormsStates = async () => {
	const response = await get<{ id: number; name: string } /*DropdownItem*/[]>(
		FORMS_STATES_URL
	);

	return response.data;
};

export const getFormsAssignees = async () => {
	const response = await get<DropdownItem[]>(FORMS_ASSIGNEES_URL);

	return response.data;
};

export const getFormsReviewers = async () => {
	const response = await get<DropdownItem[]>(FORMS_REVIEWERS_URL);

	return response.data;
};
