import React, { FC } from 'react';
import { useRolesListColumns } from '../hooks/useRolesListColumns';
import { useRolesListRows } from '../hooks/useRolesListRows';
import { List } from '../../../../components/List';

export const RolesListTable: FC = () => {
	const columns = useRolesListColumns();
	const rows = useRolesListRows();

	return <List columns={columns} rows={rows} />;
};
