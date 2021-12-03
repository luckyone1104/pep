import { GridColumns } from '@mui/x-data-grid';
import { RolesListDataField } from '../const';

export const useRolesListColumns = (): GridColumns => {
	return [
		{
			field: RolesListDataField.Title,
			headerName: 'Title',
			minWidth: 200,
			flex: 1,
		},
		{
			field: RolesListDataField.IsPrimary,
			headerName: 'Is primary',
			minWidth: 140,
			flex: 1,
			valueFormatter: (({ value }) => {
				return value ? 'Yes' : 'No';
			})
		},
		{
			field: RolesListDataField.UsersCount,
			headerName: 'Users count',
			minWidth: 140,
			flex: 1,
			hideSortIcons: true,
		},
	];
};
