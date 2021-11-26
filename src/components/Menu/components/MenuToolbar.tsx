import React, { FC } from 'react';
import { IconButton, Toolbar, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useMenuContext } from '../MenuProvider';

export const MenuToolbar: FC = () => {
	const theme = useTheme();
	const {
		isDesktopMenuExtended,
		narrowDesktopMenu
	} = useMenuContext();

	return (
		<Toolbar
			sx={{
				alignItems: 'center',
				justifyContent: 'flex-end',
				paddingRight: {
					xs: theme.spacing(1)
				},
			}}
		>
			{isDesktopMenuExtended && (
				<IconButton
					onClick={narrowDesktopMenu}
					sx={{
						display: { xs: 'none', sm: 'inline-flex' },
					}}
				>
					<ChevronLeftIcon />
				</IconButton>
			)}

		</Toolbar>
	);
};
