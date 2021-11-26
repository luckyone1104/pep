import { GridComponentProps } from '@mui/x-data-grid';
import { Take } from './providers/const';

export const DEFAULT_EMPTY_ROWS_COUNT = 5;

const options = Object.values(Take).filter(value => typeof value === 'number');

export const DEFAULT_LIST_PROPS: Partial<GridComponentProps> = {
	autoHeight: true,
	rowsPerPageOptions: options as number[],
	pagination: true,
	disableSelectionOnClick: true,
	disableColumnMenu: true,
	sortingMode: 'server',
	paginationMode: 'server',
};

