import { FC } from 'react';
import { Drawer } from '@mui/material';
import { MenuContent } from './MenuContent';
import { MENU_WIDTH } from '../Layout/const';
import { useMobileMenuContext } from '../../providers/AppProviders/MobileMenuProvider';

const container = window !== undefined ? () => window.document.body : undefined;

export const Menu: FC = () => {
	const {
		mobileOpen,
		handleMenuToggle,
	} = useMobileMenuContext();

	return (
		<>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleMenuToggle}
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