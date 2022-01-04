import { BASE_API_URL } from '../../../api';
import { TeamsFormValues } from './types';

export const TEAMS_URL = `${BASE_API_URL}/teams`;
export const PROJECTS_DROPDOWN_ITEMS_URL = TEAMS_URL.concat('/projects');
export const PROJECTS_TEAM_LEADS_URL = TEAMS_URL.concat('/teamleads');

export enum TeamsFormField {
	Title = 'title',
	ProjectId = 'projectId',
	Size = 'size',
	TeamLead = 'teamLead',
}

export const TEAMS_FORM_DEFAULT_VALUES: TeamsFormValues = {
	[TeamsFormField.Title]: '',
	[TeamsFormField.ProjectId]: '',
	[TeamsFormField.Size]: '',
	[TeamsFormField.TeamLead]: '',
};
