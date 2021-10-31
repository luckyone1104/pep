import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { TopProgressBarProvider } from './TopProgressBarProvider';

export const AppProviders: FC = ({ children }) => {
	return (
		<Router>
			<CssBaseline />
			<TopProgressBarProvider>
				{children}
			</TopProgressBarProvider>
		</Router>
	);
};