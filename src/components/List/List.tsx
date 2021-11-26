import React, { FC } from 'react';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { ListLoadingOverlay } from './components/ListLoadingOverlay';
import { DEFAULT_LIST_PROPS } from './const';
import { CustomObject } from '../../types';
import { ListNoResultsOverlay } from './components/ListNoResultsOverlay';
import { ListErrorOverlay } from './components/ListErrorOverlay';
import { useList } from './hooks/useList';

export type ListProps = {
	columns: GridColumns;
	rows: undefined | CustomObject[];
}

export const List: FC<ListProps> = (props) => {
	const {
		loading,
		sortModel,
		handleSort,
		error,
		columns,
		rows,
		page,
		take,
		totalItemsCount,
		onPageChange,
		onPageSizeChange
	} = useList(props);

	return (
		//@ts-ignore
		<DataGrid
			{...DEFAULT_LIST_PROPS}
			loading={loading}
			sortModel={sortModel}
			onSortModelChange={handleSort}
			error={error}
			columns={columns}
			rows={rows}
			page={page}
			pageSize={take}
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			rowCount={totalItemsCount}
			components={{
				LoadingOverlay: ListLoadingOverlay,
				NoResultsOverlay: ListNoResultsOverlay,
				ErrorOverlay: ListErrorOverlay,
			}}
		/>

	);
};
