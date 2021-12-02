import { useContext } from 'react';
import { isNull } from '../../../utils';
import { ListUrlQueryParamsContext } from '../providers/const';
import { CustomObject } from '../../../types';

type UrlQueryParam = Record<string, string | string[]>

type ListQueryParamsContextType = {
	urlQueryParams: UrlQueryParam;
	setUrlQueryParams: (params: CustomObject) => void;
}

export const useListUrlQueryParamsContext = () => {
	const context = useContext(ListUrlQueryParamsContext);

	if (isNull(context)) {
		throw new Error('Please, provide ListUrlQueryParamsProvider');
	}

	return context as ListQueryParamsContextType;
};
