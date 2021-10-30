import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Toolbar,
} from '@mui/material';
import { listPages } from '../../const';

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
					<ListItemText primary={'Dashboard'} />
				</ListItem>
				<Divider />
				{listPages.map(({ name, path }) => (
					<ListItem
						key={name}
						button
						onClick={() => history.push(path)}
					>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</div>
	);
};