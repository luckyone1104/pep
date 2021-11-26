import { useCallback, useEffect, useMemo } from 'react';
import { getColumnsWithSkeletons, getEmptyRows } from '../utils';
import { useListSortContext } from './useListSortContext';
import { useListPaginationParamsContext } from './useListPaginationParamsContext';
import { useListQueryContext } from './useListQueryContext';
import { ListProps } from '../List';

export const useList = (
	{
		columns,
		rows,
	}: ListProps
) => {
	const {
		page,
		setPage,
		take,
		setTake,
		totalItemsCount
	} = useListPaginationParamsContext();
	const {
		data,
		fetchNextPage,
		error,
		isLoading,
		isFetchingNextPage,
		isFetchingPreviousPage,
		isPreviousData,
	} = useListQueryContext();

	const queryError = error && new Error(error as string);

	const columnsWithSkeletons = useMemo(() => {
		return getColumnsWithSkeletons(columns);
	}, [columns]);
	const rowsWithSkeletons = useMemo(() => {
		return getEmptyRows(columns, take);
	}, [columns, take]);

	const { sortModel, handleSort } = useListSortContext();

	const loading = isLoading || isFetchingNextPage || isFetchingPreviousPage || isPreviousData;

	const handlePageChange = useCallback((pageIndex: number) => {
		setPage(pageIndex);
	}, [setPage]);

	const handlePageSizeChange = useCallback((takeSize) => {
		setPage(0);
		setTake(takeSize);
	}, [setPage, setTake]);

	useEffect(() => {
		if (page === data?.pages.length) {
			fetchNextPage();
		}
	}, [data?.pages.length, fetchNextPage, page]);

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
