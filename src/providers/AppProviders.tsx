import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MenuProvider } from 'src/components/Menu';
import { FilterSidebarProvider } from 'src/components/FilterSidebar';
import { NotificationsProvider } from './NotificationsProvider';
import { SnackbarProvider } from 'notistack';
import { DataQueryProvider } from './DataQueryProvider';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import locale from 'date-fns/locale/ru';

export const AppProviders: FC = ({ children }) => {
	return (
		<Router>
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
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
			</LocalizationProvider>
		</Router>
	);
};
