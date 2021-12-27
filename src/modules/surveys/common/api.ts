import { get } from '../../../api';
import { SURVEYS_ASSIGNEES_URL, SURVEYS_STATES_URL, SURVEYS_SUPERVISORS_URL } from './const';
import { DropdownItem } from '../../../types';

export const getSurveysStates = async () => {
	const response = await get<DropdownItem[]>(SURVEYS_STATES_URL);

	return response.data;
};

export const getSurveysAssignees = async () => {
	const response = await get<DropdownItem[]>(SURVEYS_ASSIGNEES_URL);

	return response.data;
};

export const getSurveysSupervisors = async () => {
	const response = await get<DropdownItem[]>(SURVEYS_SUPERVISORS_URL);

	return response.data;
};