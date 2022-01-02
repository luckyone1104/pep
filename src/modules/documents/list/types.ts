import { DocumentsListDataField, DocumentsListQueryParam } from './const';

export type DocumentsListData = {
	[DocumentsListDataField.Id]: number;
	[DocumentsListDataField.FileName]: string;
	[DocumentsListDataField.LastName]: string;
	[DocumentsListDataField.DocumentTypeName]: string;
	[DocumentsListDataField.ValidToDate]: string;
	[DocumentsListDataField.FirstName]: string;
};

export type DocumentsListFilterValues = {
	[DocumentsListQueryParam.Search]: string;
	[DocumentsListQueryParam.UserIds]: number[];
	[DocumentsListQueryParam.TypeIds]: number[];
	[DocumentsListQueryParam.ValidTo]: '' | Date;
};
