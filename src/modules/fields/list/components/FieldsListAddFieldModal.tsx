import React, { FC } from 'react';
import { SimpleModal } from '../../../../components/SimpleModal';
import { useAddFieldModalContext } from '../hooks/useAddFieldModalContext';
import { FieldsListAddFieldForm } from './FieldsListAddFieldForm';

export const FieldsListAddFieldModal: FC = () => {
	const { open, handleClose } = useAddFieldModalContext();

	return (
		<SimpleModal title="Add field" open={open} onClose={handleClose}>
			<FieldsListAddFieldForm />
		</SimpleModal>
	);
};
