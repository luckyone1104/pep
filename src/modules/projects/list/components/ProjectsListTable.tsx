import React, { FC } from 'react';
import { List } from '../../../../components/List';
import { useProjectsListColumns } from '../hooks/useProjectsListColumns';
import { useProjectsListRows } from '../hooks/useProjectsListRows';
import { useNavigate } from '../../../../hooks/useNavigate';
import { HandleRowClickFunction } from '../../../../components/List/types';

export const ProjectsListTable: FC = () => {
	const columns = useProjectsListColumns();
	const rows = useProjectsListRows();
	const { navigate } = useNavigate();

	const handleRowClick: HandleRowClickFunction = ({ id }) => {
		navigate(`detail/${id}`);
	};

	return (
		<List
			columns={columns}
			rows={rows}
			onRowClick={handleRowClick}
		/>
	);
};
