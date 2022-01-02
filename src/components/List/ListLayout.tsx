import React, { FC } from 'react';
import Box from '@mui/material/Box';

export const ListLayout: FC = ({ children }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
			}}
		>
			{children}
		</Box>
	);
};
