import { DeeplinksListDataField, DeeplinksListQueryParam } from './const';

export type DeeplinksListData = {
	[DeeplinksListDataField.Id]: number,
	[DeeplinksListDataField.SentTo]: string,
	[DeeplinksListDataField.ExpiresAt]: string,
	[DeeplinksListDataField.State]: string,
	[DeeplinksListDataField.FormTemplateName]: string,
}

export type DeeplinksListFilterValues = {
	[DeeplinksListQueryParam.Search]: string,
	[DeeplinksListQueryParam.SentToId]: string | number,
	[DeeplinksListQueryParam.ExpiresAtFrom]: '' | Date,
	[DeeplinksListQueryParam.ExpiresAtTo]: '' | Date,
	[DeeplinksListQueryParam.StateIds]: number[],
}
