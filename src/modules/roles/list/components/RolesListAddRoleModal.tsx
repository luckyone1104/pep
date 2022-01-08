import React, { FC } from 'react';
import { SimpleModal } from 'src/components/SimpleModal';
import { useAddRoleModalContext } from '../hooks/useAddRoleModalContext';
import { RolesListAddRoleForm } from './RolesListAddRoleForm';

export const RolesListAddRoleModal: FC = () => {
	const { open, handleClose } = useAddRoleModalContext();

	return (
		<SimpleModal title="Add user" open={open} onClose={handleClose}>
			<RolesListAddRoleForm />
		</SimpleModal>
	);
};
