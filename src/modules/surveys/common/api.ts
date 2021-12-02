import { get } from '../../../api';
import { SURVEYS_STATES_URL } from './const';
import { DropdownItem } from '../../../types';

export const getSurveysStates = async () => {
	const response = await get<DropdownItem[]>(SURVEYS_STATES_URL);

	return response.data;
};
