import React, { FC } from 'react';
import { Box } from '@mui/material';

export const SimpleModalButtonsLayout: FC = ({ children }) => {
	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'flex-end'
		}}>
			{children}
		</Box>
	);
};
