import React, { FC } from 'react';
import { useFieldsListColumns } from '../hooks/useFieldsListColumns';
import { useFieldsListRows } from '../hooks/useFieldsListRows';
import { List } from '../../../../components/List';

export const FieldsListTable: FC = () => {
	const columns = useFieldsListColumns();
	const rows = useFieldsListRows();

	return (
		<List
			columns={columns}
			rows={rows}
		/>
	);
};
