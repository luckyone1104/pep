import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { TopProgressBarProvider } from 'src/components/TopProgressBar';
import { MenuProvider } from 'src/components/Menu';
import { FilterSidebarProvider } from 'src/components/FilterSidebar';

export const AppProviders: FC = ({ children }) => {
	return (
		<Router>
			<CssBaseline />
			<TopProgressBarProvider>
				<MenuProvider>
					<FilterSidebarProvider>
						{children}
					</FilterSidebarProvider>
				</MenuProvider>
			</TopProgressBarProvider>
		</Router>
	);
};