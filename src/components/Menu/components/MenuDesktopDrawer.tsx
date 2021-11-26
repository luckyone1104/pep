import { Drawer, styled } from '@mui/material';
import { MENU_WIDTH } from '../../AppLayout/const';
import { extendedMixin, narrowedMixin } from '../styles/desktopDrawerMixins';

export const MenuDesktopDrawer = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== 'open'
})(
	({ theme, open }) => ({
		width: MENU_WIDTH,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...extendedMixin(theme),
			'& .MuiDrawer-paper': extendedMixin(theme),
		}),
		...(!open && {
			...narrowedMixin(theme),
			'& .MuiDrawer-paper': narrowedMixin(theme),
		}),
	})
);
