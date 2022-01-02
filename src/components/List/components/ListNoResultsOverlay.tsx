import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

export const ListNoResultsOverlay: FC = () => {
	return (
		<Box
			sx={{
				display: 'grid',
				placeItems: 'center',
				mt: 10,
				position: 'relative',
			}}
		>
			<Typography
				sx={{
					position: 'absolute',
					top: 2,
				}}
			>
				No results found.
			</Typography>
		</Box>
	);
};
