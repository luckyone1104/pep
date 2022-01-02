import React, { FC } from 'react';
import { useFormsColumns } from '../hooks/useFormsColumns';
import { useFormsRows } from '../hooks/useFormsRows';
import { List } from '../../../../components/List';

export const FormsTable: FC = () => {
	const columns = useFormsColumns();
	const rows = useFormsRows();

	return <List columns={columns} rows={rows} />;
};
