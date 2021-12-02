import React, { FC } from 'react';
import { useAddFormTemplateModalContext } from '../hooks/useAddFormTemplateModalContext';
import { SimpleModal } from '../../../../components/SimpleModal';

export const AddFormTemplateModal: FC = () => {
	const { open, handleClose } = useAddFormTemplateModalContext();

	return (
		<SimpleModal
			title="Add form template"
			open={open}
			onClose={handleClose}
		>
			AddFormTemplateModal
		</SimpleModal>
	);
};
