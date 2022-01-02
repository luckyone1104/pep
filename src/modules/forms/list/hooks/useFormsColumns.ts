import { GridColumns } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { FormsDataField } from '../const';
import { isEmpty } from '../../../../utils';

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
			valueFormatter: ({ value }) => {
				if (isEmpty(value)) {
					return;
				}

				return format(new Date(value as string), 'dd.MM.yyyy');
			},
		},
		{
			field: FormsDataField.State,
			headerName: 'State',
			minWidth: 140,
			flex: 1,
			hideSortIcons: true,
		},
	];
};
