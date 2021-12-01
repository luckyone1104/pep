import { createContext } from 'react';
import { FilterValues } from './types';

export const ProjectListAddProjectModalContext = createContext(null as unknown);

export enum ProjectsListFormField {
	Coordinator = 'coordinator',
	CoordinatorId = 'coordinatorId',
	Id = 'id',
	StartDate = 'startDate',
	Title = 'title',
}

export enum ProjectsListFilterField {
	CoordinatorIds = 'coordinatorIds',
	TitleSortOrder = 'titleSortOrder',
	StartDateSortOrder = 'startDateSortOrder',
	CoordinatorSortOrder = 'coordinatorSortOrder',
	Search = 'search',
}

export const SORT_FIELDS_PAIRS = [
	[ProjectsListFormField.Title, ProjectsListFilterField.TitleSortOrder],
	[ProjectsListFormField.StartDate, ProjectsListFilterField.StartDateSortOrder],
	[ProjectsListFormField.Coordinator, ProjectsListFilterField.CoordinatorSortOrder],
];

export const SIDEBAR_FORM_INITIAL_VALUES: FilterValues = {
	[ProjectsListFilterField.Search]: '',
	[ProjectsListFilterField.CoordinatorIds]: [],
};
