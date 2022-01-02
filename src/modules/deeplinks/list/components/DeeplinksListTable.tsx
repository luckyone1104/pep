import React, { FC } from 'react';
import { useDeeplinksColumns } from '../hooks/useDeeplinksColumns';
import { useDeeplinksListRows } from '../hooks/useDeeplinksListRows';
import { List } from '../../../../components/List';

export const DeeplinksListTable: FC = () => {
	const columns = useDeeplinksColumns();
	const rows = useDeeplinksListRows();

	return <List columns={columns} rows={rows} />;
};
