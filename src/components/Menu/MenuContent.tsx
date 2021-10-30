import { FC } from 'react';
import { useHistory } from 'react-router-dom';
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

	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<ListItem
					button
					onClick={() => history.push('/')}
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