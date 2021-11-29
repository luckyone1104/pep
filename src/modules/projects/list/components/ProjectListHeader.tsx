import React, { FC } from 'react';
import { Button } from '@mui/material';
import { ProjectListHeaderAddProjectModal } from './ProjectListHeaderAddProjectModal';
import { ListHeader } from '../../../../components/ListHeader';

export const ProjectListHeader: FC = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
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
			<ProjectListHeaderAddProjectModal
				open={open}
				onClose={handleClose}
			/>
		</>
	);
};
