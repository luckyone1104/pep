import React, { FC } from 'react';
import { Box, Chip, Skeleton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

export const SkeletonListBreadCrumbs: FC = () => {
	const { search } = useLocation();
	const urlQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
	const urlQueryParamsCount = Object.values(urlQueryParams).length;

	if (urlQueryParamsCount === 0) {
		return null;
	}

	return (
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
	);
};
