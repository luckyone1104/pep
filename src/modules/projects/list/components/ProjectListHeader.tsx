import React, { FC } from 'react';
import { Button } from '@mui/material';
import { ListHeader } from '../../../../components/ListHeader';
import { useProjectListAddProjectModalContext } from '../hooks/useProjectListAddProjectModalContext';

export const ProjectListHeader: FC = () => {
	const { handleOpen } = useProjectListAddProjectModalContext();

	return (
		<ListHeader
			listTitle="Projects"
			rightSide={
				<Button
					variant="outlined"
					onClick={handleOpen}
				>
					Add project
				</Button>
			}
		/>
	);
};
