import { createContext } from 'react';
import { DocumentsListFilterValues } from './types';

export const AddDocumentModalContext = createContext(null as unknown);

export const FORMATTED_NAME_FIELD = 'formattedName';

export enum DocumentsListDataField {
	Id = 'id',
	FileName = 'fileName',
	LastName = 'lastName',
	DocumentTypeName = 'documentTypeName',
	ValidToDate = 'validToDate',
	FirstName = 'firstName'
}

export enum DocumentsListQueryParam {
	UserIds = 'userIds',
	TypeIds = 'typeIds',
	ValidTo = 'validTo',
	NameSortOrder = 'nameSortOrder',
	TypeSortOrder = 'typeSortOrder',
	Search = 'search'
}

export const SORT_FIELD_PAIRS = [
	[FORMATTED_NAME_FIELD, DocumentsListQueryParam.NameSortOrder],
	[DocumentsListDataField.DocumentTypeName, DocumentsListQueryParam.TypeSortOrder]
];

export const DOCUMENTS_FILTER_INITIAL_VALUES: DocumentsListFilterValues = {
	[DocumentsListQueryParam.Search]: '',
	[DocumentsListQueryParam.UserIds]: [],
	[DocumentsListQueryParam.TypeIds]: [],
	[DocumentsListQueryParam.ValidTo]: new Date(),
};
