import { BASE_API_URL } from '../../../api';
import { DocumentsFormValues } from './types';

export const DOCUMENTS_URL = `${BASE_API_URL}/documents`;
export const DOCUMENTS_TYPES_URL = `${DOCUMENTS_URL}/types`;
export const DOCUMENTS_USERS_URL = `${DOCUMENTS_URL}/users`;

export enum DocumentsFormField {
	UserId = 'userId',
	TypeId = 'typeId',
	ValidToDate = 'validToDate',
	File = 'file',
}

export const DOCUMENTS_FORM_DEFAULT_VALUES: DocumentsFormValues = {
	[DocumentsFormField.UserId]: '',
	[DocumentsFormField.TypeId]: '',
	[DocumentsFormField.ValidToDate]: '',
	[DocumentsFormField.File]: '',
};
