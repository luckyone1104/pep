import { RolesListDataField, RolesListQueryParam } from './const';

export type RolesListData = {
	[RolesListDataField.Id]: number;
	[RolesListDataField.Title]: string;
	[RolesListDataField.IsPrimary]: boolean;
	[RolesListDataField.UsersCount]: number;
}

export type RolesListFilterValues = {
	[RolesListQueryParam.Search]: string,
	[RolesListQueryParam.IsPrimary]: null | boolean,
	[RolesListQueryParam.UsersCountFrom]: '' | number,
	[RolesListQueryParam.UsersCountTo]: '' | number,
}
