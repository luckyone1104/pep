import React, { FC, useRef } from 'react';
import { SimpleModal } from '../../../../components/SimpleModal';
import { Button } from '@mui/material';
import { SimpleModalProps } from '../../../../components/SimpleModal/SimpleModal';
import { ProjectListHeaderAddProjectForm } from './ProjectListHeaderAddProjectForm';
import { AddProjectFormValues } from '../const';
import { FormikProps } from 'formik';

type ProjectListHeaderAddProjectModalProps = Pick<SimpleModalProps, 'open' | 'onClose'>;

export const ProjectListHeaderAddProjectModal: FC<ProjectListHeaderAddProjectModalProps> = (
	{
		open,
		onClose,
	},
) => {
	const formRef = useRef<FormikProps<AddProjectFormValues>>();
	const handleFormSubmit = (...args: any[]) => formRef.current?.handleSubmit(...args);

	return (
		<SimpleModal
			title="Add project"
			open={open}
			onClose={onClose}
			actionButtons={[
				<Button key="cancel" onClick={onClose}>
					Cancel
				</Button>,
				<Button key="create" onClick={handleFormSubmit}>
					Create
				</Button>,
			]}
		>
			<ProjectListHeaderAddProjectForm ref={formRef} />
		</SimpleModal>
	);
};