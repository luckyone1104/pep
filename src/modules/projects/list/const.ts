import { BASE_API_URL } from '../../../api';

export const PROJECTS_LIST_URL = `${BASE_API_URL}/projects`;

export enum ProjectsListFormField {
	Coordinator = 'coordinator',
	CoordinatorId = 'coordinatorId',
	Id = 'id',
	StartDate = 'startDate',
	Title = 'title',
}

export enum ProjectListFilterField {
	CoordinatorIds = 'coordinatorIds',
	TitleSortOrder = 'titleSortOrder',
	StartDateSortOrder = 'startDateSortOrder',
	CoordinatorSortOrder = 'coordinatorSortOrder',
	Search = 'search',
}

export const SORT_FIELDS_PAIRS = [
	[ProjectsListFormField.Title, ProjectListFilterField.TitleSortOrder],
	[ProjectsListFormField.StartDate, ProjectListFilterField.StartDateSortOrder],
	[ProjectsListFormField.Coordinator, ProjectListFilterField.CoordinatorSortOrder],
];

export const SIDEBAR_FORM_INITIAL_VALUES = {
	[ProjectListFilterField.Search]: '',
	[ProjectListFilterField.CoordinatorIds]: [],
};

export const COORDINATORS_MOCK_DATA = [
	{
		id: 1,
		value: 'Artur Grugon',
	},
	{
		id: 2,
		value: 'Kiril Krigan',
	},
	{
		id: 3,
		value: 'Kristina Lavruk',
	},
];

export type AddProjectFormValues = {
	[ProjectsListFormField.Title]: string,
	[ProjectsListFormField.StartDate]: Date,
	[ProjectsListFormField.CoordinatorId]: '' | number,
}

export const ADD_PROJECT_FORM_INITIAL_VALUES: AddProjectFormValues = {
	[ProjectsListFormField.Title]: '',
	[ProjectsListFormField.StartDate]: new Date(),
	[ProjectsListFormField.CoordinatorId]: '',
};