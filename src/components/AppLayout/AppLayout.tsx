import React, { FC } from 'react';
import { Toolbar, Box, CssBaseline } from '@mui/material';
import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { MENU_WIDTH } from './const';

export const AppLayout: FC = ({ children }) => {
	return (
		<>
			<CssBaseline />
			<Box sx={{ display: 'flex' }}>
				<Header />
				<Box component="nav" aria-label="navigation menu">
					<Menu />
				</Box>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
						width: { sm: `calc(100% - ${MENU_WIDTH}px)` },
						maxWidth: '100vw',
					}}
				>
					<Toolbar />
					<ErrorBoundary>{children}</ErrorBoundary>
				</Box>
			</Box>
		</>
	);
};
