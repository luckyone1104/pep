import { FC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMobileMenuContext } from '../../providers/AppProviders/MobileMenuProvider';
import { MENU_WIDTH } from '../Layout/const';

export const TopBar: FC = () => {
	const { handleMenuToggle } = useMobileMenuContext();

	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${MENU_WIDTH}px)` },
				ml: { sm: `${MENU_WIDTH}px` },
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open menu"
					edge="start"
					onClick={handleMenuToggle}
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					Responsive drawer
				</Typography>
			</Toolbar>
		</AppBar>
	);
};