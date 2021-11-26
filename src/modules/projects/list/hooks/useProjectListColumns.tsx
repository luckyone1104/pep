import { ProjectsListFormField } from '../const';
import moment from 'moment';
import { formatDate } from '../../../../utils/formatDate';
import { GridColumns } from '@mui/x-data-grid';

export const useProjectListColumns = (): GridColumns => {
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
				if (moment(value as string, moment.ISO_8601, true).isValid()) {
					return formatDate(value as string);
				}
			}),

		},
		{
			field: ProjectsListFormField.Coordinator,
			headerName: 'Coordinator',
			minWidth: 200,
			flex: 1,
		}
	];
};
