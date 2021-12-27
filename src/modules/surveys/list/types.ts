import { SurveysListDataField, SurveysListQueryParam } from './const';

export type SurveysListData = {
	[SurveysListDataField.Id]: number;
	[SurveysListDataField.FormName]: string;
	[SurveysListDataField.FormId]: number;
	[SurveysListDataField.Assignee]: string;
	[SurveysListDataField.AssigneeId]: number;
	[SurveysListDataField.Supervisor]: string;
	[SurveysListDataField.SupervisorId]: number;
	[SurveysListDataField.AppointmentDate]: string;
	[SurveysListDataField.State]: string;
	[SurveysListDataField.StateId]: number;
	[SurveysListDataField.ProgressInPercenteges]: number;
}

export type SurveysListSidebarFilterValues = {
	[SurveysListQueryParam.Search]: string;
	[SurveysListQueryParam.StateIds]: (string | number)[];
	[SurveysListQueryParam.AssigneeIds]: (string | number)[];
	[SurveysListQueryParam.SupervisorIds]: (string | number)[];
	[SurveysListQueryParam.AppointmentDateFrom]: '' | Date;
	[SurveysListQueryParam.AppointmentDateTo]: '' | Date;
}
