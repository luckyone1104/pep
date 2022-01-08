import { RolesFormField } from './const';

export type RolesFormValues = {
	[RolesFormField.Title]: string;
	[RolesFormField.IsPrimary]: boolean;
}