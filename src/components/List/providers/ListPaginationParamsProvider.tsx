import React, { FC, useEffect, useState } from 'react';
import { ListPaginationParamsContext } from './const';
import { isUndefined } from '../../../utils';
import { getTakeFromLocalStorage } from './utils';

export const ListPaginationParamsProvider: FC = ({ children }) => {
	const [page, setPage] = useState(0);
	const [take, setTake] = useState(getTakeFromLocalStorage());
	const [totalItemsCount, setTotalItemsCount] = useState(0);

	const tryToSetTotalItemsCount = (totalCount: undefined | number) => {
		if (!isUndefined(totalCount)) {
			setTotalItemsCount(totalCount);
		}
	};

	useEffect(() => {
		window.localStorage.setItem('take', String(take));
	}, [take]);

	return (
		<ListPaginationParamsContext.Provider
			value={{
				page,
				setPage,
				take,
				setTake,
				totalItemsCount,
				tryToSetTotalItemsCount,
			}}
		>
			{children}
		</ListPaginationParamsContext.Provider>
	);
};
