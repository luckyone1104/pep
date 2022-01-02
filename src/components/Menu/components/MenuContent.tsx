import { FC } from 'react';
import { Divider } from '@mui/material';
import { MenuToolbar } from './MenuToolbar';
import { MenuList } from './MenuList';

export const MenuContent: FC = () => {
	return (
		<div>
			<MenuToolbar />
			<Divider />
			<MenuList />
		</div>
	);
};
