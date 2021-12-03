import { createContext } from 'react';
import { UsersListFilterValues } from './types';

export const AddUserModalContext = createContext(null as unknown);

export const FORMATTED_NAME_FIELD = 'formattedName';

export enum UsersListDataField {
	Id = 'id',
	FirstName = 'firstName',
	LastName = 'lastName',
	Email = 'email',
	TeamName = 'teamName',
	StateName = 'stateName',
	LevelName = 'levelName',
	RoleName = 'roleName',
	PreviousPEDate = 'previousPEDate',
	NextPEDate = 'nextPEDate',
}

export enum UsersListQueryParam {
	StateIds = 'stateIds',
	RoleIds = 'roleIds',
	PreviousPEDate = 'previousPEDate',
	NextPEDate = 'nextPEDate',
	UserNameSortOrder = 'userNameSortOrder',
	UserPreviousPESortOrder = 'userPreviousPESortOrder',
	UserNextPESortOrder = 'userNextPESortOrder',
	Search = 'search'
}

export const SORT_FIELD_PAIRS = [
	[FORMATTED_NAME_FIELD, UsersListQueryParam.UserNameSortOrder],
	[UsersListDataField.PreviousPEDate, UsersListQueryParam.UserPreviousPESortOrder],
	[UsersListDataField.NextPEDate, UsersListQueryParam.UserNextPESortOrder],
];

export const USERS_FILTER_INITIAL_VALUES: UsersListFilterValues = {
	[UsersListQueryParam.Search]: '',
	[UsersListQueryParam.RoleIds]: [],
	[UsersListQueryParam.UserNextPESortOrder]: new Date(),
};
