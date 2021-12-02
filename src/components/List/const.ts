import { GridComponentProps } from '@mui/x-data-grid';
import { Take } from './providers/const';

export const DEFAULT_EMPTY_ROWS_COUNT = 5;

export const DEFAULT_LIST_PROPS: Partial<GridComponentProps> = {
	autoHeight: true,
	rowsPerPageOptions: [Take.Small, Take.Medium, Take.Large],
	pagination: true,
	disableSelectionOnClick: true,
	disableColumnMenu: true,
	sortingMode: 'server',
	paginationMode: 'server',
};

