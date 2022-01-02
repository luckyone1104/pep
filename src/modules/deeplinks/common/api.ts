import { get } from '../../../api';
import { DEEPLINKS_STATES_URL, DEEPLINKS_USERS_URL } from './const';
// import { DropdownItem } from '../../../types';

export const getDeeplinksStates = async () => {
	const response = await get<{ id: number; name: string } /*DropdownItem*/[]>(
		DEEPLINKS_STATES_URL
	);

	return response.data;
};

export const getDeeplinksUrl = async () => {
	const response = await get<{ id: number; name: string } /*DropdownItem*/[]>(
		DEEPLINKS_USERS_URL
	);

	return response.data;
};
