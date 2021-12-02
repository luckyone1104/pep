import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import { AddProjectMutationData } from '../types';
import { ProjectsFormFields } from '../../common/components/ProjectsFormFields';
import { Box, Button, CircularProgress } from '@mui/material';
import { SimpleModalButtonsLayout } from '../../../../components/SimpleModal';
import { useAddProjectMutation } from '../hooks/useAddProjectMutation';
import { useProjectsListAddProjectModalContext } from '../hooks/useProjectsListAddProjectModalContext';
import { PROJECT_FORM_DEFAULT_VALUES } from '../../common/const';
import { ProjectFormValues } from '../../common/types';
import { formatProjectSubmitValues } from '../../common/utils';

export const ProjectsListAddProjectForm: FC = () => {
	const { handleClose } = useProjectsListAddProjectModalContext();
	const { mutate, isLoading } = useAddProjectMutation();

	const handleSubmit = (values: ProjectFormValues) => {
		const submitData: AddProjectMutationData = formatProjectSubmitValues(values);

		mutate(submitData);
	};

	return (
		<Formik
			initialValues={PROJECT_FORM_DEFAULT_VALUES}
			onSubmit={handleSubmit}
			validateOnBlur
		>
			<Form>
				<ProjectsFormFields />
				<Box sx={{ pt: 2 }}>
					<SimpleModalButtonsLayout>
						<Button
							onClick={handleClose}
							disabled={isLoading}
						>
							Cancel
						</Button>
						<Box sx={{ position: 'relative' }}>
							<Button
								type="submit"
								disabled={isLoading}
							>
								Create
							</Button>
							{isLoading && (
								<CircularProgress
									size={24}
									sx={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										marginTop: '-12px',
										marginLeft: '-12px',
									}}
								/>
							)}
						</Box>
					</SimpleModalButtonsLayout>
				</Box>
			</Form>
		</Formik>
	);
};
