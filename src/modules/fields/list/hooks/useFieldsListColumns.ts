import { GridColumns } from '@mui/x-data-grid';
import { FieldsListDataField } from '../const';
import { isBoolean } from '../../../../utils';

export const useFieldsListColumns = (): GridColumns => {
	return [
		{
			field: FieldsListDataField.Name,
			headerName: 'Name',
			minWidth: 220,
			flex: 1,
		},
		{
			field: FieldsListDataField.Type,
			headerName: 'Type',
			minWidth: 200,
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: FieldsListDataField.AssesmentGroupName,
			headerName: 'Assesment Group',
			minWidth: 160,
			flex: 1,
			hideSortIcons: true,
		},
		{
			field: FieldsListDataField.IsRequired,
			headerName: 'Is required',
			minWidth: 140,
			flex: 1,
			hideSortIcons: true,
			valueFormatter: (({ value }) => {
				if (!isBoolean(value)) {
					return;
				}

				return value ? 'Yes' : 'No';
			})
		},
	];
};
