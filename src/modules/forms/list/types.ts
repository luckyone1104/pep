import { FormsDataField, FormsListQueryParam } from './const';

export type FormsListData = {
	[FormsDataField.Id]: number;
	[FormsDataField.FormName]: string;
	[FormsDataField.FormId]: number;
	[FormsDataField.Assignee]: string;
	[FormsDataField.AssigneeId]: number;
	[FormsDataField.Reviewer]: string;
	[FormsDataField.ReviewerId]: number;
	[FormsDataField.State]: string;
	[FormsDataField.StateId]: number;
	[FormsDataField.AppointmentDate]: string;
}

export type FormsSidebarFilterValues = {
	[FormsListQueryParam.Search]: string;
	[FormsListQueryParam.StateId]: '' | number;
	[FormsListQueryParam.AssigneeIds]: number[];
	[FormsListQueryParam.ReviewersIds]: number[];
	[FormsListQueryParam.AppointmentDateFrom]: Date;
	[FormsListQueryParam.AppointmentDateTo]: Date;
}
