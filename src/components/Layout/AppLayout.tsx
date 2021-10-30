import { FC, useState } from 'react';
import {
	Toolbar,
	Box,
} from '@mui/material';
import { TopBar } from '../TopBar';
import { Menu } from '../Menu';
import { MENU_WIDTH } from './const';

export const AppLayout: FC = ({ children }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<TopBar handleDrawerToggle={handleDrawerToggle} />
			<Box
				component="nav"
				sx={{ width: { sm: MENU_WIDTH }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Menu
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
				/>
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