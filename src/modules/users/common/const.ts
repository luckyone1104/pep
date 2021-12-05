import { BASE_API_URL } from '../../../api';

export const USERS_URL = `${BASE_API_URL}/users`;
export const ROLES_DROPDOWN_ITEMS_URL = USERS_URL.concat('/systemrole');
