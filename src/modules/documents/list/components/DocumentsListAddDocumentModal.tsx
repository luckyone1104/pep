import React, { FC } from 'react';
import { useAddDocumentModalContext } from '../hooks/useAddDocumentModalContext';
import { SimpleModal } from '../../../../components/SimpleModal';
import { DocumentsListAddDocumentForm } from './DocumentsListAddDocumentForm';

export const DocumentsListAddDocumentModal: FC = () => {
	const { open, handleClose } = useAddDocumentModalContext();

	return (
		<SimpleModal title="Add" open={open} onClose={handleClose}>
			<DocumentsListAddDocumentForm />
		</SimpleModal>
	);
};
