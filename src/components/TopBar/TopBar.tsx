import { FC } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useMobileMenuContext } from '../../providers/AppProviders/MobileMenuProvider';
import { useFilterSidebarContext } from '../../providers/AppProviders/FilterSidebarProvider';
import { MENU_WIDTH } from '../Layout/const';

export const TopBar: FC = () => {
	const { handleMenuToggle } = useMobileMenuContext();
	const { handleSidebarToggle } = useFilterSidebarContext();

	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${MENU_WIDTH}px)` },
				ml: { sm: `${MENU_WIDTH}px` },
			}}
		>
			<Toolbar sx={{
				justifyContent: 'space-between',
			}}>
				<Box sx={{
					display: 'flex',
					flexGrow: 1,
					alignItems: 'center',
				}}>
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
						PE Platform
					</Typography>
				</Box>

				<IconButton
					color="inherit"
					aria-label="open filter sidebar"
					edge="start"
					onClick={handleSidebarToggle}
					sx={{ }}
				>
					<FilterAltIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};