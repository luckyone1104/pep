import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { List } from '../../../../components/List';
import { useProjectsListColumns } from '../hooks/useProjectsListColumns';
import { useProjectsListRows } from '../hooks/useProjectsListRows';
import { HandleRowClickFunction } from '../../../../components/List/types';

export const ProjectsListTable: FC = () => {
	const columns = useProjectsListColumns();
	const rows = useProjectsListRows();
	const { push } = useHistory();

	const handleRowClick: HandleRowClickFunction = ({ id }) => {
		push(`detail/${id}`);
	};

	return (
		<List
			columns={columns}
			rows={rows}
			onRowClick={handleRowClick}
		/>
	);
};
