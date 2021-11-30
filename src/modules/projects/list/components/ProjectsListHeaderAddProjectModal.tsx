import React, { FC, useRef } from 'react';
import { SimpleModal } from '../../../../components/SimpleModal';
import { Button } from '@mui/material';
import { SimpleModalProps } from '../../../../components/SimpleModal/SimpleModal';
import { ProjectsListHeaderAddProjectForm } from './ProjectsListHeaderAddProjectForm';
import { FormikProps } from 'formik';
import { AddProjectFormValues } from '../types';
import { useAddProjectMutation } from '../hooks/useAddProjectMutation';
import { LoadingButton } from '@mui/lab';

type ProjectListHeaderAddProjectModalProps = Pick<SimpleModalProps, 'open' | 'onClose'>;

export const ProjectsListHeaderAddProjectModal: FC<ProjectListHeaderAddProjectModalProps> = (
	{
		open,
		onClose,
	},
) => {
	const formRef = useRef<FormikProps<AddProjectFormValues>>();
	const handleFormSubmit = (...args: never[]) => formRef.current?.handleSubmit(...args);
	const { mutate, isLoading } = useAddProjectMutation();

	return (
		<SimpleModal
			title="Add project"
			open={open}
			onClose={onClose}
			actionButtons={[
				<Button
					key="cancel"
					onClick={onClose}
					disabled={isLoading}
				>
					Cancel
				</Button>,
				<LoadingButton
					key="create"
					onClick={handleFormSubmit}
					loading={isLoading}
					loadingIndicator="Loading..."
				>
					Create
				</LoadingButton>,
			]}
		>
			<ProjectsListHeaderAddProjectForm
				ref={formRef}
				mutate={mutate}
				disabled={isLoading}
			/>
		</SimpleModal>
	);
};
