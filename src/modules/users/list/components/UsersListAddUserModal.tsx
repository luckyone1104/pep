import React, { FC } from 'react';
import { useAddUserModalContext } from '../hooks/useAddUserModalContext';
import { SimpleModal } from '../../../../components/SimpleModal';
import { UsersListAddUserForm } from './UsersListAddUserForm';

export const UsersListAddUserModal: FC = () => {
	const { open, handleClose } = useAddUserModalContext();

	return (
		<SimpleModal title="Add user" open={open} onClose={handleClose}>
			<UsersListAddUserForm />
		</SimpleModal>
	);
};
