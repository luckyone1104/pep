import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { Box } from '@mui/material';
import { useAddUserModalContext } from '../hooks/useAddUserModalContext';
import { USERS_FORM_DEFAULT_VALUES } from '../../common/const';
import { UsersFormButtons } from '../../common/components/UsersFormButtons';
import { UsersFormFields } from '../../common/components/UsersFormFields';

export const UsersListAddUserForm: FC = () => {
	const { handleClose } = useAddUserModalContext();

	const handleSubmit = () => {
		console.log('handleSubmit');
	};

	return (
		<Formik
			initialValues={USERS_FORM_DEFAULT_VALUES}
			onSubmit={handleSubmit}
		>
			<Form>
				<UsersFormFields />
				<Box sx={{ pt: 2 }}>
					<UsersFormButtons
						onClose={handleClose}
						submitButtonText="Create"
					/>
				</Box>
			</Form>
		</Formik>
	);
};
