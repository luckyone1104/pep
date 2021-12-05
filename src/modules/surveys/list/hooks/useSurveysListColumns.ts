import { GridColumns } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { SurveysListDataField } from '../const';
import { isEmpty } from '../../../../utils';

export const useSurveysListColumns = (): GridColumns => {
	return [
		{
			field: SurveysListDataField.FormName,
			headerName: 'Form name',
			minWidth: 220,
			flex: 1,
		},
		{
			field: SurveysListDataField.Assignee,
			headerName: 'Assignee',
			minWidth: 200,
			flex: 1,
		},
		{
			field: SurveysListDataField.Supervisor,
			headerName: 'Supervisor',
			minWidth: 200,
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: SurveysListDataField.AppointmentDate,
			headerName: 'Appointment date',
			minWidth: 180,
			flex: 1,
			hideSortIcons: true,
			valueFormatter: (({ value }) => {
				if (isEmpty(value)) {
					return;
				}

				return format(new Date(value as string), 'dd.MM.yyyy');
			}),
		},
		{
			field: SurveysListDataField.State,
			headerName: 'State',
			minWidth: 140,
			flex: 1,
			hideSortIcons: true,
		},
	];
};
