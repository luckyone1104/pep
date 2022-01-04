import { get } from '../../../api';
import {
	ROLES_DROPDOWN_ITEMS_URL,
	USERS_ENGLISH_LEVELS_URL,
	USERS_TEAMS_URL,
	USERS_TECH_LEVELS_URL,
} from './const';
import { DropdownItem } from '../../../types';

export const getRolesDropdownItems = async () => {
	const response = await get<{ id: number; name: string } /*DropdownItem*/[]>(
		ROLES_DROPDOWN_ITEMS_URL
	);

	return response.data;
};

export const getUsersTechLevelsUrl = async () => {
	const response = await get<DropdownItem[]>(USERS_TECH_LEVELS_URL);

	return response.data;
};

export const getUsersTeamsUrl = async () => {
	const response = await get<DropdownItem[]>(USERS_TEAMS_URL);

	return response.data;
};

export const getUsersEnglishLevelsUrl = async () => {
	const response = await get<DropdownItem[]>(USERS_ENGLISH_LEVELS_URL);

	return response.data;
};
