import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MenuProvider } from 'src/components/Menu';
import { FilterSidebarProvider } from 'src/components/FilterSidebar';
import { NotificationsProvider } from './NotificationsProvider';
import { SnackbarProvider } from 'notistack';
import { DataQueryProvider } from './DataQueryProvider';

export const AppProviders: FC = ({ children }) => {
	return (
		<Router>
			<SnackbarProvider maxSnack={4}>
				<NotificationsProvider>
					<DataQueryProvider>
						<MenuProvider>
							<FilterSidebarProvider>
								{children}
							</FilterSidebarProvider>
						</MenuProvider>
					</DataQueryProvider>
				</NotificationsProvider>
			</SnackbarProvider>
		</Router>
	);
};
