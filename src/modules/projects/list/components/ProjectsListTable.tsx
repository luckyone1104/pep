import React, { FC } from 'react';
import { List } from '../../../../components/List';
import { useProjectsListColumns } from '../hooks/useProjectsListColumns';
import { useProjectsListRows } from '../hooks/useProjectsListRows';

export const ProjectsListTable: FC = () => {
	const columns = useProjectsListColumns();
	const rows = useProjectsListRows();

	return (
		<List
			columns={columns}
			rows={rows}
		/>
	);
};
