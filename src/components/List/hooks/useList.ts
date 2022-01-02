import { useCallback, useEffect, useMemo } from 'react';
import {
	getColumnsWithSkeletons,
	getEmptyRows,
	getRowsCountObjFromLocalStorage,
} from '../utils';
import { useListSortContext } from './useListSortContext';
import { useListPaginationParamsContext } from './useListPaginationParamsContext';
import { useListQueryContext } from './useListQueryContext';
import { ListProps } from '../List';
import { isUndefined } from '../../../utils';
import { LOCAL_STORAGE_LIST_ROWS_KEY } from '../const';
import { getActiveModuleNameFromUrl } from '../../../utils/getActiveModuleNameFromUrl';

export const useList = ({ columns, rows }: ListProps) => {
	const { page, setPage, take, setTake, totalItemsCount } =
		useListPaginationParamsContext();
	const {
		data,
		fetchNextPage,
		error,
		isSuccess,
		isLoading,
		isFetchingNextPage,
		isFetchingPreviousPage,
		isPreviousData,
		isRefetching,
	} = useListQueryContext();

	const queryError = error && new Error(error as string);

	const columnsWithSkeletons = useMemo(() => {
		return getColumnsWithSkeletons(columns);
	}, [columns]);
	const rowsWithSkeletons = useMemo(() => {
		return getEmptyRows(columns);
	}, [columns]);

	const { sortModel, handleSort } = useListSortContext();

	const loading =
		isLoading ||
		isFetchingNextPage ||
		isFetchingPreviousPage ||
		isPreviousData ||
		isRefetching;

	const handlePageChange = useCallback(
		(pageIndex: number) => {
			setPage(pageIndex);
		},
		[setPage]
	);

	const handlePageSizeChange = useCallback(
		(takeSize) => {
			setPage(0);
			setTake(takeSize);
		},
		[setPage, setTake]
	);

	useEffect(() => {
		if (page === data?.pages.length) {
			fetchNextPage();
		}
	}, [data?.pages.length, fetchNextPage, page]);

	useEffect(() => {
		if (isSuccess && isUndefined(rows)) {
			throw new Error('Could not load list rows');
		}
	}, [rows, isSuccess]);

	useEffect(() => {
		//@ts-ignore
		const firstPageRowsCountWithOldModel = data?.pages[0]?.length; //todo: deprecate when all lists will be updated
		const firstPageRowsCount =
			data?.pages[0]?.items?.length || firstPageRowsCountWithOldModel;

		if (!firstPageRowsCount || firstPageRowsCount === 0) {
			return;
		}

		const rowsCountObj = getRowsCountObjFromLocalStorage() || {};
		const activeModuleName = getActiveModuleNameFromUrl();

		window.localStorage.setItem(
			LOCAL_STORAGE_LIST_ROWS_KEY,
			JSON.stringify({
				...rowsCountObj,
				[activeModuleName]: firstPageRowsCount,
			})
		);
	}, [data?.pages]);

	return {
		page,
		take,
		totalItemsCount,
		loading,
		sortModel,
		handleSort,
		error: queryError,
		columns: columnsWithSkeletons,
		rows: rows || rowsWithSkeletons,
		onPageChange: handlePageChange,
		onPageSizeChange: handlePageSizeChange,
	};
};
