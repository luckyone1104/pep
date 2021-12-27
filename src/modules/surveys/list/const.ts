import { createContext } from 'react';
import { SurveysListSidebarFilterValues } from './types';

export const AddSurveyModalContext = createContext(null as unknown);

export enum SurveysListDataField {
	Id = 'id',
	FormName = 'formName',
	FormId = 'formId',
	Assignee = 'assignee',
	AssigneeId = 'assigneeId',
	Supervisor = 'supervisor',
	SupervisorId = 'supervisorId',
	AppointmentDate = 'appointmentDate',
	State = 'state',
	StateId = 'stateId',
	ProgressInPercenteges = 'progressInPercenteges',
}

export enum SurveysListQueryParam {
	AppointmentDateFrom = 'appointmentDateFrom',
	AppointmentDateTo = 'appointmentDateTo',
	StateIds = 'stateIds',
	AssigneeIds = 'assigneeIds',
	SupervisorIds = 'supervisorIds',
	FormNameSortOrder = 'formNameSortOrder',
	AssigneeSortOrder = 'assigneeSortOrder',
	Search = 'search',
}

export enum AddSurveyDataField {
	FormId = 'formId',
	AssigneeId = 'assigneeId',
	AppointmentDate = 'appointmentDate',
	RecommendedLevelId = 'recommendedLevelId',
	SupervisorId = 'supervisorId',
	AssignedUserIds = 'assignedUserIds',
}

export const SORT_FIELD_PAIRS = [
	[SurveysListDataField.FormName, SurveysListQueryParam.FormNameSortOrder],
	[SurveysListDataField.Assignee, SurveysListQueryParam.AssigneeSortOrder],
];

export const SURVEYS_LIST_FILTER_INITIAL_VALUES: SurveysListSidebarFilterValues = {
	[SurveysListQueryParam.Search]: '',
	[SurveysListQueryParam.StateIds]: [],
	[SurveysListQueryParam.AssigneeIds]: [],
	[SurveysListQueryParam.SupervisorIds]: [],
	[SurveysListQueryParam.AppointmentDateFrom]: new Date(),
	[SurveysListQueryParam.AppointmentDateTo]: new Date(),
};
