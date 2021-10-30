import { FC } from 'react';
import { Drawer } from '@mui/material';
import { MenuContent } from './MenuContent';
import { MENU_WIDTH } from '../Layout/const';

const container = window !== undefined ? () => window.document.body : undefined;

type MenuProps = {
	mobileOpen: boolean;
	handleDrawerToggle: () => void;
}

export const Menu: FC<MenuProps> = (
	{
		mobileOpen,
		handleDrawerToggle,
	}
) => {
	return (
		<>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: MENU_WIDTH },
				}}
			>
				<MenuContent />
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: MENU_WIDTH },
				}}
				open
			>
				<MenuContent />
			</Drawer>
		</>
	);
};