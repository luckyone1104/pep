import React, { FC } from 'react';
import { useUsersListColumns } from '../hooks/useUsersListColumns';
import { useUsersListRows } from '../hooks/useUsersListRows';
import { List } from '../../../../components/List';

export const UsersListTable: FC = () => {
	const columns = useUsersListColumns();
	const rows = useUsersListRows();

	return <List columns={columns} rows={rows} />;
};
