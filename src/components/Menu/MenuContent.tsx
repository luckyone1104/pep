import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
	Divider,
	List,
	ListItem, ListItemIcon,
	ListItemText,
	Toolbar,
} from '@mui/material';
import { listPages } from '../../const';
import { menuIcons } from './menuIcons';

export const MenuContent: FC = () => {
	const history = useHistory();
	const { pathname } = useLocation();

	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<ListItem
					button
					onClick={() => history.push('/')}
					selected={pathname === '/'}
				>
					<ListItemIcon>
						{menuIcons['Dashboard']}
					</ListItemIcon>
					<ListItemText primary={'Dashboard'} />
				</ListItem>
				<Divider />
				{listPages.map(({ name, path }) => (
					<ListItem
						key={name}
						button
						onClick={() => history.push(path)}
						selected={pathname === path}
					>
						<ListItemIcon>
							{menuIcons[name]}
						</ListItemIcon>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</div>
	);
};