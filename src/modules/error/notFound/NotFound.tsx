import { FC } from 'react';
import { Alert } from '@mui/material';

export const NotFound: FC = () => {
	return (
		<Alert severity="error">
			Page not found!
		</Alert>
	);
};
