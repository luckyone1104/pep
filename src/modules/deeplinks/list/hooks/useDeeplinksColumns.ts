import { GridColumns } from '@mui/x-data-grid';
import { DeeplinksListDataField } from '../const';
import { isValidDate } from '../../../../utils';

export const useDeeplinksColumns = (): GridColumns => {
	return [
		{
			field: DeeplinksListDataField.SentTo,
			headerName: 'Sent to',
			minWidth: 200,
			flex: 1,
		},
		{
			field: DeeplinksListDataField.ExpiresAt,
			headerName: 'Expires at',
			minWidth: 180,
			flex: 1,
			valueFormatter: (({ value }) => {
				const date = new Date(value as string);

				if (isValidDate(date)) {
					return date.toLocaleString('ru').slice(0, 10);
				}
			}),
		},
		{
			field: DeeplinksListDataField.State,
			headerName: 'State',
			minWidth: 140,
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: DeeplinksListDataField.FormTemplateName,
			headerName: 'Form template name',
			minWidth: 220,
			flex: 1,
			hideSortIcons: true,
		},
	];
};
