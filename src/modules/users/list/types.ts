import { UsersListDataField, UsersListQueryParam } from './const';

export type UsersListData = {
	[UsersListDataField.Id]: number,
	[UsersListDataField.FirstName]: string,
	[UsersListDataField.LastName]: string,
	[UsersListDataField.Email]: string,
	[UsersListDataField.TeamName]: string,
	[UsersListDataField.StateName]: string,
	[UsersListDataField.LevelName]: string,
	[UsersListDataField.RoleName]: string,
	[UsersListDataField.PreviousPEDate]: string,
	[UsersListDataField.NextPEDate]: string,
}

export type UsersListFilterValues = {
	[UsersListQueryParam.Search]: string,
	[UsersListQueryParam.RoleIds]: number[],
	[UsersListQueryParam.NextPEDate]: '' | Date,
}
