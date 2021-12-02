import React, { FC } from 'react';
import { useFieldGroupsListColumns } from '../hooks/useFieldGroupsListColumns';
import { useFieldGroupsListRows } from '../hooks/useFieldGroupsListRows';
import { List } from '../../../../components/List';

export const FieldGroupsListTable: FC = () => {
	const columns = useFieldGroupsListColumns();
	const rows = useFieldGroupsListRows();

	return (
		<List
			columns={columns}
			rows={rows}
		/>
	);
};
