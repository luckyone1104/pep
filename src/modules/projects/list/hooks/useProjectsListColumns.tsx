import { ProjectsListDataField } from '../const';
import { format } from 'date-fns';
import { GridColumns } from '@mui/x-data-grid';
import { isEmpty } from '../../../../utils';

export const useProjectsListColumns = (): GridColumns => {
	return [
		{
			field: ProjectsListDataField.Title,
			headerName: 'Title',
			minWidth: 200,
			flex: 1,
		},
		{
			field: ProjectsListDataField.StartDate,
			headerName: 'Start date',
			minWidth: 120,
			flex: 1,
			valueFormatter: (({ value }) => {
				if (isEmpty(value)) {
					return;
				}

				return format(new Date(value as string), 'dd.MM.yyyy');
			}),

		},
		{
			field: ProjectsListDataField.Coordinator,
			headerName: 'Coordinator',
			minWidth: 200,
			flex: 1,
		},
	];
};
