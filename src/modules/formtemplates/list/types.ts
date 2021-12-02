import {
	AddFormTemplateMutationField,
	FormTemplatesDataField,
	FormTemplatesFieldRequestModelField,
	FormTemplatesQueryParam
} from './const';

export type FormTemplatesListData = {
	[FormTemplatesDataField.Id]: number;
	[FormTemplatesDataField.Name]: string;
	[FormTemplatesDataField.Version]: number,
	[FormTemplatesDataField.StatusName]: string;
	[FormTemplatesDataField.StatusId]: number;
	[FormTemplatesDataField.CreatedAt]: string;
}

type FormTemplateFieldRequestModel = {
	[FormTemplatesFieldRequestModelField.Id]: number;
	[FormTemplatesFieldRequestModelField.Order]: number;
}

export type AddFormTemplateMutationData = {
	[AddFormTemplateMutationField.Name]: string;
	[AddFormTemplateMutationField.Fields]: FormTemplateFieldRequestModel[];
}

export type FormTemplatesSidebarFilterValues = {
	[FormTemplatesQueryParam.StatusIds]: (string | number)[];
	[FormTemplatesQueryParam.Search]: string;
}
