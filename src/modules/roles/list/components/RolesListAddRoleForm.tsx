import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { ROLES_FORM_DEFAULT_VALUES } from '../../common/const';
import { useAddRoleModalContext } from '../hooks/useAddRoleModalContext';
import { RolesFormButtons } from '../../common/common/RolesFormButtons';
import { RolesFormFields } from '../../common/common/RolesFormFields';

export const RolesListAddRoleForm: FC = () => {
	const { handleClose } = useAddRoleModalContext();

	const handleSubmit = () => {
		console.log('handleSubmit');
	};

	return (
		<Formik
			initialValues={ROLES_FORM_DEFAULT_VALUES}
			onSubmit={handleSubmit}
		>
			<Form>
				<RolesFormFields />
				<RolesFormButtons
					onClose={handleClose}
					submitButtonText="Create"
				/>
			</Form>
		</Formik>
	);
};
