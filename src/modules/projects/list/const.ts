import { BASE_API_URL } from '../../../api';
import { AddProjectFormValues } from './types';
import { createContext } from 'react';

export const PROJECTS_COORDINATORS_QUERY_KEY = 'PROJECTS_COORDINATORS_QUERY_KEY';

export const ProjectListAddProjectModalContext = createContext(null as unknown);

export const PROJECTS_LIST_URL = `${BASE_API_URL}/projects`;
export const PROJECTS_COORDINATORS_URL = PROJECTS_LIST_URL.concat('/filterCoordinators');

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

export const ADD_PROJECT_FORM_INITIAL_VALUES: AddProjectFormValues = {
	[ProjectsListFormField.Title]: '',
	[ProjectsListFormField.StartDate]: new Date(),
	[ProjectsListFormField.CoordinatorId]: '',
};
