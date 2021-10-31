import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { TopProgressBarProvider } from './TopProgressBarProvider';
import { MobileMenuProvider } from './MobileMenuProvider';
import { FilterSidebarProvider } from './FilterSidebarProvider';

export const AppProviders: FC = ({ children }) => {
	return (
		<Router>
			<CssBaseline />
			<TopProgressBarProvider>
				<MobileMenuProvider>
					<FilterSidebarProvider>
						{children}
					</FilterSidebarProvider>
				</MobileMenuProvider>
			</TopProgressBarProvider>
		</Router>
	);
};