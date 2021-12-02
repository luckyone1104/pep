import { FormTemplatesSidebarFilterValues } from './types';
import { createContext } from 'react';

export const AddFormTemplateModalContext = createContext(null as unknown);

export enum FormTemplatesDataField {
	Id = 'id',
	Name = 'name',
	Version = 'version',
	StatusName = 'statusName',
	StatusId = 'statusId',
	CreatedAt = 'createdAt',
}

export enum AddFormTemplateMutationField {
	Name = 'name',
	Fields = 'fields',
}

export enum FormTemplatesFieldRequestModelField {
	Id = 'id',
	Order = 'order',
}

export enum FormTemplatesQueryParam {
	StatusIds = 'statusIds',
	NameSortOrder = 'nameSortOrder',
	Search = 'search',
}

export const SORT_FIELD_PAIRS = [
	[FormTemplatesDataField.Name, FormTemplatesQueryParam.NameSortOrder],
];

export const SIDEBAR_FORM_INITIAL_VALUES: FormTemplatesSidebarFilterValues = {
	[FormTemplatesQueryParam.StatusIds]: [],
	[FormTemplatesQueryParam.Search]: '',
};
