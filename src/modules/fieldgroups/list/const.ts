import { createContext } from 'react';
import { FieldGroupsListFilterValues } from './types';

export const AddFieldGroupContext = createContext(null as unknown);

export enum FieldGroupsListDataField {
	Id = 'id',
	Title = 'title',
	FieldCount = 'fieldCount',
}

export enum FieldGroupListQueryParam {
	IsNotEmpty = 'isNotEmpty',
	CountFrom = 'countFrom',
	CountTo = 'countTo',
	TitleSetOrder = 'titleSetOrder',
	FieldCountSetOrder = 'fieldCountSetOrder',
	Search = 'search',
}

export const SORT_FIELD_PAIRS = [
	[FieldGroupsListDataField.Title, FieldGroupListQueryParam.TitleSetOrder],
	[
		FieldGroupsListDataField.FieldCount,
		FieldGroupListQueryParam.FieldCountSetOrder,
	],
];

export const FIELD_GROUPS_FILTER_INITIAL_VALUES: FieldGroupsListFilterValues = {
	[FieldGroupListQueryParam.Search]: '',
	[FieldGroupListQueryParam.IsNotEmpty]: null,
	[FieldGroupListQueryParam.CountFrom]: '',
	[FieldGroupListQueryParam.CountTo]: '',
};
