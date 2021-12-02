import { ProjectsListDataField } from '../const';
import { formatDate } from '../../../../utils/formatDate';
import { GridColumns } from '@mui/x-data-grid';
import { isValidDate } from '../../../../utils';

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
				const date = new Date(value as string);

				if (isValidDate(date)) {
					return formatDate(date);
				}
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
