import { BASE_API_URL } from '../../../api';
import { RolesFormValues } from './types';

export const ROLES_URL = `${BASE_API_URL}/roles`;

export enum RolesFormField {
	Title = 'title',
	IsPrimary = 'isPrimary',
}

export const ROLES_FORM_DEFAULT_VALUES: RolesFormValues = {
	[RolesFormField.Title]: '',
	[RolesFormField.IsPrimary]: false
};