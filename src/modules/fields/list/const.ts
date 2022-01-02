import { createContext } from 'react';
import { FieldsListFilterValues } from './types';

export const AddFieldModalContext = createContext(null as unknown);

export enum FieldsListDataField {
	Id = 'id',
	Name = 'name',
	Type = 'type',
	AssesmentGroupName = 'assesmentGroupName',
	TypeId = 'typeId',
	AssesmentGroupId = 'assesmentGroupId',
	IsRequired = 'isRequired',
}

export enum FieldsListQueryParam {
	AssesmentGroupIds = 'assesmentGroupIds',
	TypeIds = 'typeIds',
	FieldNameSortOrder = 'fieldNameSortOrder',
	Search = 'search',
}

export const SORT_FIELD_PAIRS = [
	[FieldsListDataField.Name, FieldsListQueryParam.FieldNameSortOrder],
];

export const FIELD_FILTER_INITIAL_VALUES: FieldsListFilterValues = {
	[FieldsListQueryParam.Search]: '',
	[FieldsListQueryParam.TypeIds]: [],
	[FieldsListQueryParam.AssesmentGroupIds]: [],
};
