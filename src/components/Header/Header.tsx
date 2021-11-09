import { FC } from 'react';
import { AppBar, Toolbar, useTheme } from '@mui/material';
import { HeaderLeftSide } from './components/HeaderLeftSide';
import { HeaderRightSide } from './components/HeaderRightSide';
import { useMenuContext } from '../Menu/MenuProvider';
import { headerExtendedMixin, headerMixin } from './styles/mixins';

export const Header: FC = () => {
	const theme = useTheme();
	const {
		isDesktopMenuExtended,
	} = useMenuContext();

	return (
		<AppBar
			position="fixed"
			sx={{
				...headerMixin(theme),
				...(isDesktopMenuExtended && headerExtendedMixin(theme)),
			}}
		>
			<Toolbar sx={{
				justifyContent: 'space-between',
			}}>
				<HeaderLeftSide />
				<HeaderRightSide />
			</Toolbar>
		</AppBar>
	);
};