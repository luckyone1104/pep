import { TeamsFormField } from './const';

export type TeamsFormValues = {
	[TeamsFormField.Title]: string;
	[TeamsFormField.ProjectId]: string | number;
	[TeamsFormField.Size]: string | number;
	[TeamsFormField.TeamLead]: string | number;
};
