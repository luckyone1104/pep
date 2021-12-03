import { createContext } from 'react';
import { RolesListFilterValues } from './types';

export const AddRoleModalContext = createContext(null as unknown);

export enum RolesListDataField {
	Id = 'id',
	Title = 'title',
	IsPrimary = 'isPrimary',
	UsersCount = 'usersCount'
}

export enum RolesListQueryParam {
	Search = 'search',
	IsPrimary = 'isPrimary',
	UsersCountFrom = 'usersCountFrom',
	UsersCountTo = 'usersCountTo',
	TitleSortOrder = 'titleSortOrder',
	IsPrimarySortOrder = 'isPrimarySortOrder',
}

export const SORT_FIELD_PAIRS = [
	[RolesListDataField.Title, RolesListQueryParam.TitleSortOrder],
	[RolesListDataField.IsPrimary, RolesListQueryParam.IsPrimarySortOrder]
];

export const ROLES_FILTER_INITIAL_VALUES: RolesListFilterValues = {
	[RolesListQueryParam.Search]: '',
	[RolesListQueryParam.IsPrimary]: null,
	[RolesListQueryParam.UsersCountFrom]: '',
	[RolesListQueryParam.UsersCountTo]: '',
};
