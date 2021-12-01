import React, { FC } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useDetailQueryContext } from '../../../../components/Detail/hooks/useDetailQueryContext';
import { ProjectsDetailData } from '../types';

export const ProjectsDetailHeader: FC = () => {
	const { data, isSuccess, isLoading } = useDetailQueryContext<ProjectsDetailData>();

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'space-between',
		}}>
			<Typography
				variant="h5"
				sx={{
					fontWeight: 700,
				}}
			>

				{isLoading && (
					<Skeleton sx={{
						width: '200px'
					}}/>
				)}
				{isSuccess && (
					data!.title
				)}
			</Typography>
		</Box>
	);
};
