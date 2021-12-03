import { GridColumns } from '@mui/x-data-grid';
import { DocumentsListDataField, FORMATTED_NAME_FIELD } from '../const';
import { isUndefined, isValidDate } from '../../../../utils';

export const useDocumentsListColumns = (): GridColumns => {
	return [
		{
			field: FORMATTED_NAME_FIELD,
			headerName: 'User name',
			minWidth: 200,
			flex: 1,
			valueGetter: (params) => {
				if (isUndefined(params.row.firstName) || isUndefined(params.row.lastName)) {
					return;
				}

				return `${params.row.firstName} ${params.row.lastName}`;
			}
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
			valueFormatter: (({ value }) => {
				const date = new Date(value as string);

				if (isValidDate(date)) {
					return date.toLocaleString('ru').slice(0, 10);
				}
			}),
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
