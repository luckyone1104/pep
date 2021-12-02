import { get } from '../../../api';
import { FORM_TEMPLATES_STATUSES_URL } from './const';

export const getStatuses = async () => {
	const response = await get(FORM_TEMPLATES_STATUSES_URL);

	return response.data;
};
