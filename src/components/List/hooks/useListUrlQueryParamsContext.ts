import { useContext } from 'react';
import { isNull } from '../../../utils';
import { CustomObject } from '../../../types';
import { ListUrlQueryParamsContext } from '../providers/const';

type ListQueryParamsContextType = {
	urlQueryParams: Record<string, string>;
	setUrlQueryParams: (params: CustomObject) => void;
}

export const useListUrlQueryParamsContext = () => {
	const context = useContext(ListUrlQueryParamsContext);

	if (isNull(context)) {
		throw new Error('Please, provide ListUrlQueryParamsProvider');
	}

	return context as ListQueryParamsContextType;
};
