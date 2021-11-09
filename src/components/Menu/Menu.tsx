import { FC } from 'react';
import { Drawer } from '@mui/material';
import { MenuContent } from './components/MenuContent';
import { MENU_WIDTH } from '../Layout/const';
import { useMenuContext } from './MenuProvider';
import { DesktopDrawer } from './components/MenuDesktopDrawer';

export const Menu: FC = () => {
	const {
		isMobileMenuOpened,
		isDesktopMenuExtended,
		toggleMobileMenu,
	} = useMenuContext();

	return (
		<>
			<Drawer
				variant="temporary"
				open={isMobileMenuOpened}
				onClose={toggleMobileMenu}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: MENU_WIDTH },
				}}
			>
				<MenuContent />
			</Drawer>
			<DesktopDrawer
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },
				}}
				open={isDesktopMenuExtended}
			>
				<MenuContent />
			</DesktopDrawer>
		</>
	);
};