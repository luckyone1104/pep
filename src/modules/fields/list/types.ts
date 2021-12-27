import { FieldsListDataField, FieldsListQueryParam } from './const';

export type FieldsListData = {
	[FieldsListDataField.Id]: number,
	[FieldsListDataField.Name]: string,
	[FieldsListDataField.Type]: string,
	[FieldsListDataField.AssesmentGroupName]: string,
	[FieldsListDataField.TypeId]: number,
	[FieldsListDataField.AssesmentGroupId]: number,
	[FieldsListDataField.IsRequired]: boolean,
}

export type FieldsListFilterValues = {
	[FieldsListQueryParam.Search]: string,
	[FieldsListQueryParam.TypeIds]: number[],
	[FieldsListQueryParam.AssesmentGroupIds]: number[],
}
