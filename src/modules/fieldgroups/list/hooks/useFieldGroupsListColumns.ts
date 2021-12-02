import { GridColumns } from '@mui/x-data-grid';
import { FieldGroupsListDataField } from '../const';

export const useFieldGroupsListColumns = (): GridColumns => {
	return [
		{
			field: FieldGroupsListDataField.Title,
			headerName: 'Title',
			minWidth: 220,
			flex: 1,
		},
		{
			field: FieldGroupsListDataField.FieldCount,
			headerName: 'Fields count',
			minWidth: 160,
			flex: 1,
		},
	];
};
