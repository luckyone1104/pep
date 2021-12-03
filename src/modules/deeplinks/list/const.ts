import { createContext } from 'react';

export const AddDeeplinkModalContext = createContext(null as unknown);

export enum DeeplinksListDataField {
	Id = 'id',
	SentTo = 'sentTo',
	ExpiresAt = 'expiresAt',
	State = 'state',
	FormTemplateName = 'formTemplateName',
}

export enum DeeplinksListQueryParam {
	SentToId = 'sentTold',
	ExpiresAtFrom = 'expiresAtFrom',
	ExpiresAtTo = 'expiresAtTo',
	OrderSentTo = 'orderSentTo',
	OrderExpiresAt = 'orderExpiresAt',
	StateIds = 'stateIds',
	Search = 'search',
}

export const SORT_FIELD_PAIRS = [
	[DeeplinksListDataField.SentTo, DeeplinksListQueryParam.OrderSentTo],
	[DeeplinksListDataField.ExpiresAt, DeeplinksListQueryParam.OrderExpiresAt]
];

export const DEEPLINKS_FILTER_INITIAL_VALUES = {
	[DeeplinksListQueryParam.Search]: '',
	[DeeplinksListQueryParam.SentToId]: '',
	[DeeplinksListQueryParam.ExpiresAtFrom]: new Date(),
	[DeeplinksListQueryParam.ExpiresAtTo]: new Date(),
	[DeeplinksListQueryParam.StateIds]: [],
};
