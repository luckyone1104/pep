import { ProjectsListDataField, ProjectsListQueryParam } from './const';

export type ProjectsListData = {
	[ProjectsListDataField.Coordinator]: string;
	[ProjectsListDataField.CoordinatorId]: number;
	[ProjectsListDataField.Id]: number;
	[ProjectsListDataField.StartDate]: string;
	[ProjectsListDataField.Title]: string;
}

export type AddProjectMutationData = {
	[ProjectsListDataField.Title]: string,
	[ProjectsListDataField.StartDate]: string,
	[ProjectsListDataField.CoordinatorId]: '' | number,
}

export type ProjectListSidebarFilterValues = {
	[ProjectsListQueryParam.Search]: string,
	[ProjectsListQueryParam.CoordinatorIds]: (string | number)[],
}
