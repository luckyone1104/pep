import React, { FC } from 'react';
import { useTeamsListColumns } from '../hooks/useTeamsListColumns';
import { useTeamsListRows } from '../hooks/useTeamsListRows';
import { List } from '../../../../components/List';

export const TeamsListTable: FC = () => {
	const columns = useTeamsListColumns();
	const rows = useTeamsListRows();
		
	return (
		<List
			columns={columns}
			rows={rows}
		/>
	);
};
