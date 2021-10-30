import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

export const AppProviders: FC = ({ children }) => {
	return (
		<Router>
			<CssBaseline />
			{children}
		</Router>
	);
};