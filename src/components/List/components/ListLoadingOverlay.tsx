import React, { FC } from 'react';
import { GridOverlay } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

export const ListLoadingOverlay: FC = () => {
	return (
		<GridOverlay>
			<div style={{ position: 'absolute', top: 0, width: '100%' }}>
				<LinearProgress />
			</div>
		</GridOverlay>
	);
};
