import { GridColumns } from '@mui/x-data-grid';
import { FORMATTED_NAME_FIELD, UsersListDataField } from '../const';
import { isValidDate } from '../../../../utils';

export const useUsersListColumns = (): GridColumns => {
	return [
		{
			field: FORMATTED_NAME_FIELD,
			headerName: 'Name',
			minWidth: 240,
			flex: 1,
			valueGetter: (params) => {
				return `${params.row.firstName} ${params.row.lastName}`;
			}
		},
		{
			field: UsersListDataField.Email,
			headerName: 'Email',
			minWidth: 240,
			flex: 1,
		},
		{
			field: UsersListDataField.TeamName,
			headerName: 'Team',
			minWidth: 140,
			flex: 1,
		},
		{
			field: UsersListDataField.RoleName,
			headerName: 'Role',
			minWidth: 160,
			flex: 1,
		},
		{
			field: UsersListDataField.LevelName,
			headerName: 'Level',
			minWidth: 140,
			flex: 1,
		},
		{
			field: UsersListDataField.PreviousPEDate,
			headerName: 'Previous PE date',
			minWidth: 140,
			flex: 1,
			valueFormatter: (({ value }) => {
				const date = new Date(value as string);

				if (isValidDate(date)) {
					return date.toLocaleString('ru').slice(0, 10);
				}
			}),
		},
		{
			field: UsersListDataField.NextPEDate,
			headerName: 'Next PE date',
			minWidth: 140,
			flex: 1,
			valueFormatter: (({ value }) => {
				const date = new Date(value as string);

				if (isValidDate(date)) {
					return date.toLocaleString('ru').slice(0, 10);
				}
			}),
		},
		{
			field: UsersListDataField.StateName,
			headerName: 'State',
			minWidth: 140,
			flex: 1,
		},
	];
};
