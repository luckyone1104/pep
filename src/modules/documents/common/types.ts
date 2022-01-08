import { DocumentsFormField } from './const';

export type DocumentsFormValues = {
	[DocumentsFormField.UserId]: '' | number;
	[DocumentsFormField.TypeId]: '' | number;
	[DocumentsFormField.ValidToDate]: '' | Date;
	[DocumentsFormField.File]: string;
};
