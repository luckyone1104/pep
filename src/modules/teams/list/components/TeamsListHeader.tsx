import React, { FC } from 'react';
import { useAddTeamModalContext } from '../hooks/useAddTeamModalContext';
import { ListHeader } from '../../../../components/ListHeader';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';

export const TeamsListHeader: FC = () => {
	const { handleOpen } = useAddTeamModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.Teams}
			rightSide={
				<Button
					variant="outlined"
					onClick={handleOpen}
				>
					Add team
				</Button>
			}
		/>
	);
};
