import React, { FC } from 'react';
import { Button } from '@mui/material';
import { ListHeader } from '../../../../components/ListHeader';
import { useProjectsListAddProjectModalContext } from '../hooks/useProjectsListAddProjectModalContext';

export const ProjectsListHeader: FC = () => {
	const { handleOpen } = useProjectsListAddProjectModalContext();

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
