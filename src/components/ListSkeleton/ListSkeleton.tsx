import React, { FC } from 'react';
import { Box, Chip, Skeleton, Typography } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { getEmptyRows, renderCellWIthSkeleton } from '../List/utils';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

export const ListSkeleton: FC = () => {
	const { search } = useLocation();
	const urlQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
	const urlQueryParamsCount = Object.values(urlQueryParams).length;

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
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			gap: 3,
		}}>
			<Typography
				variant="h5"
				sx={{
					fontWeight: 700,
					width: '300px',
					maxWidth: '100%'
				}}
			>
				<Skeleton />
			</Typography>
			{urlQueryParamsCount > 0 && (
				<Box sx={{
					display: 'flex',
					gap: '8px'
				}}>
					{Array(urlQueryParamsCount).fill(null).map((item, index) => (
						<Skeleton key={index}>
							<Chip
								variant="outlined"
								sx={{ minWidth: '100px' }}
							/>
						</Skeleton>
					))}
				</Box>
			)}
			<DataGrid
				autoHeight
				disableColumnMenu
				hideFooter
				columns={columns}
				rows={getEmptyRows(columns, 3)}
			/>
		</Box>
	);
};
