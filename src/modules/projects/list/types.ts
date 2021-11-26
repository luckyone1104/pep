import { ProjectListFilterField, ProjectsListFormField } from './const';
import { Sort } from '../../../types';

export type ProjectsListDataItem = {
	[ProjectsListFormField.Coordinator]: string;
	[ProjectsListFormField.CoordinatorId]: number;
	[ProjectsListFormField.Id]: number;
	[ProjectsListFormField.StartDate]: string;
	[ProjectsListFormField.Title]: string;
}

export type ProjectListData = {
	totalItemsCount?: number;
	items: ProjectsListDataItem[];
}

export type ProjectListFilterValues = {
	[ProjectListFilterField.CoordinatorIds]?: number[];
	[ProjectListFilterField.TitleSortOrder]?: Sort;
	[ProjectListFilterField.StartDateSortOrder]?: Sort;
	[ProjectListFilterField.CoordinatorSortOrder]?: Sort;
	[ProjectListFilterField.Search]?: string;
} //todo: ??


