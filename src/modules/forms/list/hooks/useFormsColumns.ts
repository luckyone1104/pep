import { GridColumns } from '@mui/x-data-grid';
import { FormsDataField } from '../const';
import { isValidDate } from '../../../../utils';

export const useFormsColumns = (): GridColumns => {
	return [
		{
			field: FormsDataField.FormName,
			headerName: 'Form name',
			minWidth: 240,
			flex: 1,
		},
		{
			field: FormsDataField.Assignee,
			headerName: 'Assignee',
			minWidth: 200,
			flex: 1,
		},
		{
			field: FormsDataField.Reviewer,
			headerName: 'Reviewer',
			minWidth: 200,
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: FormsDataField.AppointmentDate,
			headerName: 'Appointment date',
			minWidth: 180,
			flex: 1,
			hideSortIcons: true,
			valueFormatter: (({ value }) => {
				const date = new Date(value as string);

				if (isValidDate(date)) {
					return date.toLocaleString('ru').slice(0, 10);
				}
			}),
		},
		{
			field: FormsDataField.State,
			headerName: 'State',
			minWidth: 140,
			flex: 1,
			hideSortIcons: true,
		}
	];
};
