import { FC } from 'react';
import {
	Toolbar,
	Box,
} from '@mui/material';
import { TopBar } from '../TopBar';
import { Menu } from '../Menu';
import { MENU_WIDTH } from './const';

export const AppLayout: FC = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<TopBar />
			<Box
				component="nav"
				sx={{ width: { sm: MENU_WIDTH }, flexShrink: { sm: 0 } }}
				aria-label="navigation menu"
			>
				<Menu />
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${MENU_WIDTH}px)` } }}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};