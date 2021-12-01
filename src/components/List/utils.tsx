import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import { isEmpty } from '../../utils';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { CustomObject } from '../../types';
import { DEFAULT_EMPTY_ROWS_COUNT } from './const';

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

export const getEmptyRows = (columns: GridColumns, take: number) => {
	const fields = columns.map(({ field }) => field);
	const emptyRowsCount = Math.min(DEFAULT_EMPTY_ROWS_COUNT, take);

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
