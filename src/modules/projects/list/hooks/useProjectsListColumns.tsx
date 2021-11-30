import { ProjectsListFormField } from '../const';
import { formatDate } from '../../../../utils/formatDate';
import { GridColumns } from '@mui/x-data-grid';

export const useProjectsListColumns = (): GridColumns => {
	return [
		{
			field: ProjectsListFormField.Title,
			headerName: 'Title',
			minWidth: 200,
			flex: 1,
		},
		{
			field: ProjectsListFormField.StartDate,
			headerName: 'Start date',
			minWidth: 120,
			flex: 1,
			valueFormatter: (({ value }) => {
				if (typeof value === 'string' && !Number.isNaN(Date.parse(value))) {
					return formatDate(new Date(value));
				}
			}),

		},
		{
			field: ProjectsListFormField.Coordinator,
			headerName: 'Coordinator',
			minWidth: 200,
			flex: 1,
		},
	];
};
