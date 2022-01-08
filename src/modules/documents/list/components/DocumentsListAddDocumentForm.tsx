import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { Box } from '@mui/material';
import { useAddDocumentModalContext } from '../hooks/useAddDocumentModalContext';
import { DOCUMENTS_FORM_DEFAULT_VALUES } from '../../common/const';
import { DocumentsFormFields } from '../../common/components/DocumentsFormFields';
import { DocumentsFormButtons } from '../../common/components/DocumentsFormButtons';

export const DocumentsListAddDocumentForm: FC = () => {
	const { handleClose } = useAddDocumentModalContext();

	const handleSubmit = () => {
		console.log('handleSubmit');
	};

	return (
		<Formik
			initialValues={DOCUMENTS_FORM_DEFAULT_VALUES}
			onSubmit={handleSubmit}
		>
			<Form>
				<DocumentsFormFields />
				<Box sx={{ pt: 2 }}>
					<DocumentsFormButtons
						onClose={handleClose}
						submitButtonText="Create"
					/>
				</Box>
			</Form>
		</Formik>
	);
};
