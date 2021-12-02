import React, { FC } from 'react';
import { useAddFieldGroupContext } from '../hooks/useAddFieldGroupContext';
import { ListHeader } from '../../../../components/ListHeader';
import { Button } from '@mui/material';
import { ModuleName } from '../../../../const';

export const FieldGroupsListHeader: FC = () => {
	const { handleOpen } = useAddFieldGroupContext();

	return (
		<ListHeader
			listTitle={ModuleName.FieldGroups}
			rightSide={
				<Button
					variant="outlined"
					onClick={handleOpen}
				>
					Add
				</Button>
			}
		/>
	);
};
