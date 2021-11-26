import React, { FC, useState } from 'react';
import { ListPaginationParamsContext, Take } from './const';
import { isUndefined } from '../../../utils';

export const ListPaginationParamsProvider: FC = ({ children }) => {
	const [page, setPage] = useState(0);
	const [take, setTake] = useState(Take.Small);
	const [totalItemsCount, setTotalItemsCount] = useState(0);

	const tryToSetTotalItemsCount = (totalCount: undefined | number) => {
		if (!isUndefined(totalCount)) {
			setTotalItemsCount(totalCount);
		}
	};

	return (
		<ListPaginationParamsContext.Provider value={{
			page,
			setPage,
			take,
			setTake,
			totalItemsCount,
			tryToSetTotalItemsCount
		}}>
			{children}
		</ListPaginationParamsContext.Provider>
	);
};
