import { createContext } from 'react';
import { TeamsListFilterValues } from './types';

export const AddTeamModalContext = createContext(null as unknown);

export enum TeamsListDataField {
	Title = 'title',
	Id = 'id',
	ProjectTitle = 'projectTitle',
	ProjectId = 'projectId',
	Size = 'size',
	TeamLead = 'teamLead',
}

export enum TeamsListQueryParam {
	ProjectIds = 'projectIds',
	OrderByTeamTitle = 'orderByTeamTitle',
	OrderByProjectTitle = 'orderByProjectTitle',
	OrderByTeamSize = 'orderByTeamSize',
	Search = 'search',
}

export const SORT_FIELD_PAIRS = [
	[TeamsListDataField.Title, TeamsListQueryParam.OrderByProjectTitle],
	[TeamsListDataField.ProjectTitle, TeamsListQueryParam.OrderByProjectTitle],
	[TeamsListDataField.Size, TeamsListQueryParam.OrderByTeamSize]
];

export const TEAMS_FILTER_INITIAL_VALUES: TeamsListFilterValues = {
	[TeamsListQueryParam.Search]: '',
	[TeamsListQueryParam.ProjectIds]: [],
};
