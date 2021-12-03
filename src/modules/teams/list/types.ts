import { TeamsListDataField, TeamsListQueryParam } from './const';

export type TeamsListData = {
	[TeamsListDataField.Title]: string,
	[TeamsListDataField.Id]: number,
	[TeamsListDataField.ProjectTitle]: string,
	[TeamsListDataField.ProjectId]: number,
	[TeamsListDataField.Size]: number,
	[TeamsListDataField.TeamLead]: string,
}

export type TeamsListFilterValues = {
	[TeamsListQueryParam.Search]: string,
	[TeamsListQueryParam.ProjectIds]: (string | number)[],
}
