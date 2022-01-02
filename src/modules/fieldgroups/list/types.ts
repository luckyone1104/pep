import { FieldGroupListQueryParam, FieldGroupsListDataField } from './const';

export type FieldGroupsListData = {
	[FieldGroupsListDataField.Id]: number;
	[FieldGroupsListDataField.Title]: string;
	[FieldGroupsListDataField.FieldCount]: number;
};

export type FieldGroupsListFilterValues = {
	[FieldGroupListQueryParam.Search]: string;
	[FieldGroupListQueryParam.IsNotEmpty]: '' | 0 | 1;
	[FieldGroupListQueryParam.CountFrom]: string;
	[FieldGroupListQueryParam.CountTo]: string;
};
