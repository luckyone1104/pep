import { ProjectFormValues } from './types';
import { BASE_API_URL } from '../../../api';

export const PROJECTS_URL = `${BASE_API_URL}/projects`;
export const PROJECTS_COORDINATORS_URL = PROJECTS_URL.concat(
	'/filterCoordinators'
);

export enum ProjectFormField {
	CoordinatorId = 'coordinatorId',
	StartDate = 'startDate',
	Title = 'title',
}

export const PROJECT_FORM_DEFAULT_VALUES: ProjectFormValues = {
	[ProjectFormField.Title]: '',
	[ProjectFormField.StartDate]: new Date(),
	[ProjectFormField.CoordinatorId]: '' as const,
};
