import { FieldGroupListQueryParam, FieldGroupsListDataField } from './const';

export type FieldGroupsListData = {
	[FieldGroupsListDataField.Id]: number;
	[FieldGroupsListDataField.Title]: string;
	[FieldGroupsListDataField.FieldCount]: number;
}

export type FieldGroupsListFilterValues = {
	[FieldGroupListQueryParam.Search]: string,
	[FieldGroupListQueryParam.IsNotEmpty]: null | boolean,
	[FieldGroupListQueryParam.CountFrom]: string | number,
	[FieldGroupListQueryParam.CountTo]: string | number,
}
