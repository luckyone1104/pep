import { FC } from 'react';
import { Drawer } from '@mui/material';
import { MenuContent } from './components/MenuContent';
import { MENU_WIDTH } from '../AppLayout/const';
import { useMenuContext } from './MenuProvider';
import { MenuDesktopDrawer } from './components/MenuDesktopDrawer';

export const Menu: FC = () => {
	const { isMobileMenuOpened, isDesktopMenuExtended, toggleMobileMenu } =
		useMenuContext();

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
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: MENU_WIDTH,
					},
				}}
			>
				<MenuContent />
			</Drawer>
			<MenuDesktopDrawer
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },
				}}
				open={isDesktopMenuExtended}
			>
				<MenuContent />
			</MenuDesktopDrawer>
		</>
	);
};
