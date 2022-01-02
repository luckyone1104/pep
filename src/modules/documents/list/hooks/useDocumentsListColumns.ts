import { GridColumns } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { DocumentsListDataField, FORMATTED_NAME_FIELD } from '../const';
import { isEmpty, isUndefined } from '../../../../utils';

export const useDocumentsListColumns = (): GridColumns => {
	return [
		{
			field: FORMATTED_NAME_FIELD,
			headerName: 'User name',
			minWidth: 200,
			flex: 1,
			valueGetter: (params) => {
				if (
					isUndefined(params.row.firstName) ||
					isUndefined(params.row.lastName)
				) {
					return;
				}

				return `${params.row.firstName} ${params.row.lastName}`;
			},
		},
		{
			field: DocumentsListDataField.DocumentTypeName,
			headerName: 'Type',
			minWidth: 200,
			flex: 1,
		},
		{
			field: DocumentsListDataField.ValidToDate,
			headerName: 'Valid to',
			minWidth: 200,
			flex: 1,
			valueFormatter: ({ value }) => {
				if (isEmpty(value)) {
					return;
				}

				return format(new Date(value as string), 'dd.MM.yyyy');
			},
			hideSortIcons: true,
		},
		{
			field: DocumentsListDataField.FileName,
			headerName: 'File name',
			minWidth: 200,
			flex: 1,
			hideSortIcons: true,
		},
	];
};
