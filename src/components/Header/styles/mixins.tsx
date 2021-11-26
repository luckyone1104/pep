import { CSSObject, Theme } from '@mui/material';
import { MENU_WIDTH } from '../../AppLayout/const';

export const headerMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	[theme.breakpoints.up('sm')]: {
		zIndex: theme.zIndex.drawer + 1,
	},
});

export const headerExtendedMixin = (theme: Theme): CSSObject => ({
	width: `calc(100% - ${MENU_WIDTH}px)`,
	ml: { sm: `${MENU_WIDTH}px` },
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	[theme.breakpoints.only('xs')]: {
		width: '100%',
	},
	[theme.breakpoints.up('sm')]: {
		width: `calc(100% - ${MENU_WIDTH}px)`,
	},
});
