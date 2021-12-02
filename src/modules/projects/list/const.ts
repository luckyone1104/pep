import { createContext } from 'react';
import { ProjectListSidebarFilterValues } from './types';

export const ProjectListAddProjectModalContext = createContext(null as unknown);

export enum ProjectsListDataField {
	Coordinator = 'coordinator',
	CoordinatorId = 'coordinatorId',
	Id = 'id',
	StartDate = 'startDate',
	Title = 'title',
}

export enum ProjectsListQueryParam {
	CoordinatorIds = 'coordinatorIds',
	TitleSortOrder = 'titleSortOrder',
	StartDateSortOrder = 'startDateSortOrder',
	CoordinatorSortOrder = 'coordinatorSortOrder',
	Search = 'search',
}

export const SORT_FIELDS_PAIRS = [
	[ProjectsListDataField.Title, ProjectsListQueryParam.TitleSortOrder],
	[ProjectsListDataField.StartDate, ProjectsListQueryParam.StartDateSortOrder],
	[ProjectsListDataField.Coordinator, ProjectsListQueryParam.CoordinatorSortOrder],
];

export const SIDEBAR_FORM_INITIAL_VALUES: ProjectListSidebarFilterValues = {
	[ProjectsListQueryParam.Search]: '',
	[ProjectsListQueryParam.CoordinatorIds]: [],
};
