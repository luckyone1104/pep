import { FC, SyntheticEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from '@mui/material';
import { listPages } from '../../const';
import { menuIcons } from './menuIcons';
import { useMenuContext } from './MenuProvider';

export const MenuContent: FC = () => {
	const history = useHistory();
	const { handleMenuToggle } = useMenuContext();
	const { pathname } = useLocation();
	const handleLinkButtonClick = ((e: SyntheticEvent, path: string) => {
		e.preventDefault();
		history.push(path);
		handleMenuToggle();
	});

	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<ListItem
					button
					component="a"
					href="/"
					onClick={(e: SyntheticEvent) => {
						handleLinkButtonClick(e, '/');
					}}
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
						component="a"
						href={path}
						onClick={(e: SyntheticEvent) => {
							handleLinkButtonClick(e, path);
						}}
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