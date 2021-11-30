import { ProjectListFilterField, ProjectsListFormField } from './const';
import { Sort } from '../../../types';

export type ProjectsListDataItem = {
	[ProjectsListFormField.Coordinator]: string;
	[ProjectsListFormField.CoordinatorId]: number;
	[ProjectsListFormField.Id]: number;
	[ProjectsListFormField.StartDate]: string;
	[ProjectsListFormField.Title]: string;
}

export type ProjectListFilterValues = {
	[ProjectListFilterField.CoordinatorIds]?: number[];
	[ProjectListFilterField.TitleSortOrder]?: Sort;
	[ProjectListFilterField.StartDateSortOrder]?: Sort;
	[ProjectListFilterField.CoordinatorSortOrder]?: Sort;
	[ProjectListFilterField.Search]?: string;
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
