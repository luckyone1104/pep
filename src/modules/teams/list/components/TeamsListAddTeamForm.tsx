import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { Box } from '@mui/material';
import { useAddTeamModalContext } from '../hooks/useAddTeamModalContext';
import { TEAMS_FORM_DEFAULT_VALUES } from '../../common/const';
import { TeamsFormFields } from '../../common/components/TeamsFormFields';
import { TeamsFormButtons } from '../../common/components/TeamsFormButtons';

export const TeamsListAddTeamForm: FC = () => {
	const { handleClose } = useAddTeamModalContext();

	const handleSubmit = () => {
		console.log('handleSubmit');
	};

	return (
		<Formik
			initialValues={TEAMS_FORM_DEFAULT_VALUES}
			onSubmit={handleSubmit}
		>
			<Form>
				<TeamsFormFields />
				<Box sx={{ pt: 2 }}>
					<TeamsFormButtons
						onClose={handleClose}
						submitButtonText="Create"
					/>
				</Box>
			</Form>
		</Formik>
	);
};
