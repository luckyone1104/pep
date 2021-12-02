import { get } from '../../../api';
import { PROJECTS_COORDINATORS_URL } from './const';

export const getCoordinators = async () => {
	const response = await get(PROJECTS_COORDINATORS_URL);

	return response.data;
};
