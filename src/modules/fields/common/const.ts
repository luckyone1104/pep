import { BASE_API_URL } from '../../../api';
import { FieldsFormValues } from './types';

export const FIELDS_URL = `${BASE_API_URL}/fields`;
export const FIELDS_TYPES_URL = FIELDS_URL.concat('/types');
export const ASSESSMENT_GROUPS_URL = FIELDS_URL.concat('/assessmentgroups');

export enum FieldsFormField {
	Name = 'name',
	TypeId = 'typeId',
	AssessmentGroupId = 'assesmentGroupId',
	IsRequired = 'isRequired',
	Description = 'description',
}

export const FIELDS_FORM_DEFAULT_VALUES: FieldsFormValues = {
	[FieldsFormField.Name]: '',
	[FieldsFormField.TypeId]: '',
	[FieldsFormField.AssessmentGroupId]: '',
	[FieldsFormField.IsRequired]: false,
	[FieldsFormField.Description]: '',
};
