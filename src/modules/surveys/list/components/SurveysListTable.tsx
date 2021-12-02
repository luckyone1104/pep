import React, { FC } from 'react';
import { useSurveysListColumns } from '../hooks/useSurveysListColumns';
import { useSurveysListRows } from '../hooks/useSurveysListRows';
import { List } from '../../../../components/List';

export const SurveysListTable: FC = () => {
	const columns = useSurveysListColumns();
	const rows = useSurveysListRows();

	return (
		<List
			columns={columns}
			rows={rows}
		/>
	);
};
