import React, { FC } from 'react';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';
import { ListHeader } from '../../../../components/ListHeader';
import { useAddRoleModalContext } from '../hooks/useAddRoleModalContext';

export const RolesListHeader: FC = () => {
	const { handleOpen } = useAddRoleModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.Roles}
			rightSide={
				<Button variant="outlined" onClick={handleOpen}>
					Add
				</Button>
			}
		/>
	);
};
