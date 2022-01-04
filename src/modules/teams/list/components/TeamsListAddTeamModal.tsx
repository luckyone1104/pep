import React, { FC } from 'react';
import { useAddTeamModalContext } from '../hooks/useAddTeamModalContext';
import { SimpleModal } from '../../../../components/SimpleModal';
import { TeamsListAddTeamForm } from './TeamsListAddTeamForm';

export const TeamsListAddTeamModal: FC = () => {
	const { open, handleClose } = useAddTeamModalContext();

	return (
		<SimpleModal title="Add team" open={open} onClose={handleClose}>
			<TeamsListAddTeamForm />
		</SimpleModal>
	);
};
