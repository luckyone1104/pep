import { useContext } from 'react';
import { isNull } from '../../../utils';
import { ListPaginationParamsContext } from '../providers/const';

type ListPaginationParamsType = {
	page: number;
	setPage: (pageIndex: number) => void;
	take: number;
	setTake: (take: number) => void;
	totalItemsCount: number;
	tryToSetTotalItemsCount: (totalCount: undefined | number) => void;
};

export const useListPaginationParamsContext = () => {
	const context = useContext(ListPaginationParamsContext);

	if (isNull(context)) {
		throw new Error('Please, provide ListPaginationParamsProvider');
	}

	return context as ListPaginationParamsType;
};
