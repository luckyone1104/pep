import React, { FC } from 'react';
import { useAddUserModalContext } from '../hooks/useAddUserModalContext';
import { ListHeader } from '../../../../components/ListHeader';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';

export const UsersListHeader: FC = () => {
	const { handleOpen } = useAddUserModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.Users}
			rightSide={
				<Button
					variant="outlined"
					onClick={handleOpen}
				>
					Add new user
				</Button>
			}
		/>
	);
};
