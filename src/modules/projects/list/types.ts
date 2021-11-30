import { ProjectsListFormField } from './const';

export type ProjectsListDataItem = {
	[ProjectsListFormField.Coordinator]: string;
	[ProjectsListFormField.CoordinatorId]: number;
	[ProjectsListFormField.Id]: number;
	[ProjectsListFormField.StartDate]: string;
	[ProjectsListFormField.Title]: string;
}

export type AddProjectFormValues = {
	[ProjectsListFormField.Title]: string,
	[ProjectsListFormField.StartDate]: Date,
	[ProjectsListFormField.CoordinatorId]: '' | number,
}

export type AddProjectMutationData = {
	[ProjectsListFormField.Title]: string,
	[ProjectsListFormField.StartDate]: string,
	[ProjectsListFormField.CoordinatorId]: '' | number,
}
