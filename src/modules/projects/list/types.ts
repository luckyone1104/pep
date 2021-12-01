import { ProjectsListFilterField, ProjectsListFormField } from './const';

export type ProjectsListDataItem = {
	[ProjectsListFormField.Coordinator]: string;
	[ProjectsListFormField.CoordinatorId]: number;
	[ProjectsListFormField.Id]: number;
	[ProjectsListFormField.StartDate]: string;
	[ProjectsListFormField.Title]: string;
}

export type AddProjectMutationData = {
	[ProjectsListFormField.Title]: string,
	[ProjectsListFormField.StartDate]: string,
	[ProjectsListFormField.CoordinatorId]: '' | number,
}

export type FilterValues = {
	[ProjectsListFilterField.Search]: string,
	[ProjectsListFilterField.CoordinatorIds]: (string | number)[],
}
