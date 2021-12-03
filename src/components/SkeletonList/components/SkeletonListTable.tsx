import React, { FC } from 'react';
import { getEmptyRows, renderCellWIthSkeleton } from '../../List/utils';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { Skeleton, Typography } from '@mui/material';

export const SkeletonListTable: FC = () => {
	const columns: GridColumns = [{
		field: 'skeleton',
		headerName: '',
		flex: 1,
		renderCell: renderCellWIthSkeleton,
		hideSortIcons: true,
		renderHeader: () => (
			<Typography sx={{ width: '100%' }}>
				<Skeleton />
			</Typography>
		)
	}];

	return (
		<DataGrid
			autoHeight
			disableColumnMenu
			hideFooter
			columns={columns}
			rows={getEmptyRows(columns)}
		/>
	);
};
