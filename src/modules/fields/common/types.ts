import { FieldsFormField } from './const';

export type FieldsFormValues = {
	[FieldsFormField.Name]: string;
	[FieldsFormField.TypeId]: '' | number;
	[FieldsFormField.AssessmentGroupId]: '' | number;
	[FieldsFormField.IsRequired]: boolean;
	[FieldsFormField.Description]: string;
};
