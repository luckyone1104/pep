import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { isEmpty, isNull } from '../../utils';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { CustomObject } from '../../types';
import { DEFAULT_EMPTY_ROWS_COUNT, LOCAL_STORAGE_LIST_ROWS_KEY } from './const';
import { getActiveModuleNameFromUrl } from '../../utils/getActiveModuleNameFromUrl';

export const renderCellWIthSkeleton = ({ formattedValue }: GridRenderCellParams) => {
	return isEmpty(formattedValue)
		? (
			<Typography sx={{ width: '100%' }}>
				<Skeleton />
			</Typography>
		)
		: (formattedValue as string);
};

export const getColumnsWithSkeletons = (columns: GridColumns) => {
	return columns.reduce((acc, column) => {
		column.renderCell = renderCellWIthSkeleton;
		acc.push(column);

		return acc;
	}, [] as GridColumns);
};

export const getRowsCountObjFromLocalStorage = () => {
	const localStorageItem = window.localStorage.getItem(LOCAL_STORAGE_LIST_ROWS_KEY);

	if (isNull(localStorageItem)) {
		return {};
	}

	return JSON.parse(localStorageItem) || {};
};

const getListRowsCountFromLocalStorage = () => {
	const activeModuleName = getActiveModuleNameFromUrl();

	if (activeModuleName === '') {
		return null;
	}

	const rowsCountObj = getRowsCountObjFromLocalStorage();

	return rowsCountObj[activeModuleName];
};

export const getEmptyRows = (columns: GridColumns) => {
	const fields = columns.map(({ field }) => field);
	const emptyRowsCount = getListRowsCountFromLocalStorage() || DEFAULT_EMPTY_ROWS_COUNT;

	return Array(emptyRowsCount)
		.fill(null)
		.map((item, index) => {
			return fields.reduce((acc, key) => {
				acc[key] = '';
				acc.id = index;

				return acc;
			}, {} as CustomObject);
		});
};
