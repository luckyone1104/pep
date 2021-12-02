import { GridColumns } from '@mui/x-data-grid';
import { SurveysListDataField } from '../const';
import { isValidDate } from '../../../../utils';

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
				const date = new Date(value as string);

				if (isValidDate(date)) {
					return date.toLocaleString('ru').slice(0, 10);
				}
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
