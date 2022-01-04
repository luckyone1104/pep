import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { Box } from '@mui/material';
import { useAddFieldModalContext } from '../hooks/useAddFieldModalContext';
import { FIELDS_FORM_DEFAULT_VALUES } from '../../common/const';
import { FieldsFormButtons } from '../../common/components/FieldsFormButtons';
import { FieldsFormFields } from '../../common/components/FieldsFormFields';

export const FieldsListAddFieldForm: FC = () => {
	const { handleClose } = useAddFieldModalContext();

	const handleSubmit = () => {
		console.log('handleSubmit');
	};

	return (
		<Formik
			initialValues={FIELDS_FORM_DEFAULT_VALUES}
			onSubmit={handleSubmit}
		>
			<Form>
				<FieldsFormFields />
				<Box sx={{ pt: 2 }}>
					<FieldsFormButtons
						onClose={handleClose}
						submitButtonText="Create"
					/>
				</Box>
			</Form>
		</Formik>
	);
};
