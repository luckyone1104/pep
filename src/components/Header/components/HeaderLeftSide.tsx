import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMenuContext } from '../../Menu/MenuProvider';

export const HeaderLeftSide: FC = () => {
	const {
		toggleMobileMenu,
		isDesktopMenuExtended,
		extendDesktopMenu
	} = useMenuContext();

	return (
		<Box sx={{
			display: 'flex',
			flexGrow: 1,
			alignItems: 'center',
		}}>
			<IconButton
				color="inherit"
				aria-label="open menu"
				edge="start"
				onClick={toggleMobileMenu}
				sx={{ mr: 2, display: { sm: 'none' } }}
			>
				<MenuIcon />
			</IconButton>
			<IconButton
				color="inherit"
				aria-label="extend menu"
				edge="start"
				onClick={extendDesktopMenu}
				sx={{
					mr: 4,
					display: {
						xs: 'none',
						sm: 'inline-flex'
					},
					...(isDesktopMenuExtended && { display: 'none' })
				}}
			>
				<MenuIcon />
			</IconButton>
			<Typography
				variant="h6"
				noWrap
				component="div"
			>
				PE Platform
			</Typography>
		</Box>
	);
};