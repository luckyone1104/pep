import { ProjectFormField } from './const';

export type ProjectFormValues = {
	[ProjectFormField.Title]: string,
	[ProjectFormField.StartDate]: Date,
	[ProjectFormField.CoordinatorId]: '' | number,
}
