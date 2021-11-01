import { FC } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useMenuContext } from '../Menu/MenuProvider';
import { useFilterSidebarContext } from '../FilterSidebar/FilterSidebarProvider';
import { MENU_WIDTH } from '../Layout/const';

export const Header: FC = () => {
	const { handleMenuToggle } = useMenuContext();
	const { isSidebarMounted, handleSidebarToggle } = useFilterSidebarContext();

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

				{isSidebarMounted && (
					<IconButton
						color="inherit"
						aria-label="open filter sidebar"
						edge="start"
						onClick={handleSidebarToggle}
						sx={{ }}
					>
						<FilterAltIcon />
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
};