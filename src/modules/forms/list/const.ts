import { FormsSidebarFilterValues } from './types';

export enum FormsDataField {
	Id = 'id',
	FormName = 'formName',
	FormId = 'formId',
	Assignee = 'assignee',
	AssigneeId = 'assigneeId',
	Reviewer = 'reviewer',
	ReviewerId = 'reviewerId',
	State = 'state',
	StateId = 'stateId',
	AppointmentDate = 'appointmentDate',
}

export enum FormsListQueryParam {
	StateId = 'StateId',
	AppointmentDateFrom = 'appointmentDateFrom',
	AppointmentDateTo = 'appointmentDateTo',
	AssigneeIds = 'assigneeIds',
	ReviewersIds = 'reviewersIds',
	AssigneeSortOrder = 'assigneeSortOrder',
	FormNameSortOrder = 'formNameSortOrder',
	Search = 'search',
}

export const SORT_FIELD_PAIRS = [
	[FormsDataField.FormName, FormsListQueryParam.FormNameSortOrder],
	[FormsDataField.Assignee, FormsListQueryParam.AssigneeSortOrder],
];

export const SIDEBAR_FORM_INITIAL_VALUES: FormsSidebarFilterValues = {
	[FormsListQueryParam.Search]: '',
	[FormsListQueryParam.StateId]: '',
	[FormsListQueryParam.AssigneeIds]: [],
	[FormsListQueryParam.ReviewersIds]: [],
	[FormsListQueryParam.AppointmentDateFrom]: new Date(),
	[FormsListQueryParam.AppointmentDateTo]: new Date(),
};
