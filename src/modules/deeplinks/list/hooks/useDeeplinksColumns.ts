import { GridColumns } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { DeeplinksListDataField } from '../const';
import { isEmpty } from '../../../../utils';

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
				if (isEmpty(value)) {
					return;
				}

				return format(new Date(value as string), 'dd.MM.yyyy');
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
