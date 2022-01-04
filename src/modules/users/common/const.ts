import { BASE_API_URL } from '../../../api';
import { UsersFormValues } from './types';

export const USERS_URL = `${BASE_API_URL}/users`;
export const ROLES_DROPDOWN_ITEMS_URL = USERS_URL.concat('/systemrole');
export const USERS_TECH_LEVELS_URL = USERS_URL.concat('/techlevels');
export const USERS_TEAMS_URL = USERS_URL.concat('/teams');
export const USERS_ENGLISH_LEVELS_URL = USERS_URL.concat('/englishlevels');

export enum UsersFormField {
	FirstName = 'firstName',
	LastName = 'lastName',
	Email = 'email',
	TeamId = 'teamId',
	TechnicalLevelId = 'technicalLevelId',
	RoleIds = 'roleIds',
	EnglishLevelId = 'englishLevelId',
	SystemRoleId = 'systemRoleId',
	FirstDayInCompany = 'firstDayInCompany',
	FirstDayInIndustry = 'firstDayInIndustry',
}

export const USERS_FORM_DEFAULT_VALUES: UsersFormValues = {
	[UsersFormField.FirstName]: '',
	[UsersFormField.LastName]: '',
	[UsersFormField.Email]: '',
	[UsersFormField.TeamId]: '',
	[UsersFormField.TechnicalLevelId]: '',
	[UsersFormField.RoleIds]: [],
	[UsersFormField.EnglishLevelId]: '',
	[UsersFormField.SystemRoleId]: '',
	[UsersFormField.FirstDayInCompany]: '',
	[UsersFormField.FirstDayInIndustry]: '',
};
