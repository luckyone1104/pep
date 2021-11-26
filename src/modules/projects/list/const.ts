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
	[ProjectsListFormField.Coordinator, ProjectListFilterField.CoordinatorSortOrder]
];

export const SIDEBAR_FORM_DEFAULT_FIELD_VALUES = {
	[ProjectListFilterField.Search]: '',
	// [ProjectListFilterField.CoordinatorIds]: []
};
