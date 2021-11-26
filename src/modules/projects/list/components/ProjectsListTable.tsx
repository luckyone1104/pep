import React, { FC } from 'react';
import { List } from '../../../../components/List';
import { useProjectListColumns } from '../hooks/useProjectListColumns';
import { useProjectListRows } from '../hooks/useProjectListRows';

export const ProjectsListTable: FC = () => {
	const columns = useProjectListColumns();
	const rows = useProjectListRows();

	return (
		<List
			columns={columns}
			rows={rows}
		/>
	);
};
