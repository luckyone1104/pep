import { GridColumns } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { FormTemplatesDataField } from '../const';
import { isEmpty } from '../../../../utils';

export const useFormTemplatesColumns = (): GridColumns => {
	return [
		{
			field: FormTemplatesDataField.Name,
			headerName: 'Name',
			minWidth: 200,
			flex: 1,
		},
		{
			field: FormTemplatesDataField.Version,
			headerName: 'Version',
			minWidth: 100,
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: FormTemplatesDataField.StatusName,
			headerName: 'Status',
			minWidth: 140,
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: FormTemplatesDataField.CreatedAt,
			headerName: 'Created at',
			minWidth: 180,
			flex: 1,
			hideSortIcons: true,
			valueFormatter: ({ value }) => {
				if (isEmpty(value)) {
					return;
				}

				return format(new Date(value as string), 'dd.MM.yyyy, hh:mm');
			},
		},
	];
};
