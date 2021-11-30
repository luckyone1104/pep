import React, { FC } from 'react';
import { Box } from '@mui/material';

export const DetailLayout: FC = ({ children }) => {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			gap: 4
		}}>
			{children}
		</Box>
	);
};
