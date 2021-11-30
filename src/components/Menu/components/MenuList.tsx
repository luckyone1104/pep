import React, { FC, SyntheticEvent } from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { menuIcons } from '../menuIcons';
import { listPages } from '../../../const';
import { useHistory, useLocation } from 'react-router-dom';
import { useMenuContext } from '../MenuProvider';
import { checkIfMenuItemSelected } from './utils';

export const MenuList: FC = () => {
	const history = useHistory();
	const {
		toggleMobileMenu,
	} = useMenuContext();
	const { pathname } = useLocation();
	const handleLinkButtonClick = ((e: SyntheticEvent, path: string) => {
		e.preventDefault();
		history.push(path);
		toggleMobileMenu();
	});

	return (
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
					selected={checkIfMenuItemSelected(pathname, name)}
				>
					<ListItemIcon>
						{menuIcons[name]}
					</ListItemIcon>
					<ListItemText primary={name} />
				</ListItem>
			))}
		</List>
	);
};
