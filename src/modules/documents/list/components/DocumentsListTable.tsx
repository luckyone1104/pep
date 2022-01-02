import React, { FC } from 'react';
import { useDocumentsListColumns } from '../hooks/useDocumentsListColumns';
import { useDocumentsListRows } from '../hooks/useDocumentsListRows';
import { List } from '../../../../components/List';

export const DocumentsListTable: FC = () => {
	const columns = useDocumentsListColumns();
	const rows = useDocumentsListRows();

	return <List columns={columns} rows={rows} />;
};
