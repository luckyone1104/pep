import React, { FC } from 'react';
import { Alert } from '@mui/material';

export const ListErrorOverlay: FC = () => {
	return  (
		<Alert severity="error">
			Could not load list data
		</Alert>
	);
};
