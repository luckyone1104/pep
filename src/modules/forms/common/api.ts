import { FORMS_STATES_URL } from './const';
import { get } from '../../../api';

export const getFormsStates = async () => {
	const response = await get(FORMS_STATES_URL);

	return response.data;
};
