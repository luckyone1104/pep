import React, { forwardRef, Ref } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { ADD_PROJECT_FORM_INITIAL_VALUES, COORDINATORS_MOCK_DATA, ProjectsListFormField, } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { Box } from '@mui/material';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { combineValidators, date, length, required } from 'src/utils/validators';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from '../../../../components/adapters/DatePickerField/const';
import { UseMutateFunction } from 'react-query';
import { AddProjectFormValues, AddProjectMutationData } from '../types';
import { CustomObject } from '../../../../types';

type ProjectListHeaderAddProjectFormProps = {
	mutate:  UseMutateFunction<CustomObject, unknown, AddProjectMutationData> ;
	disabled: boolean;
}

export const ProjectListHeaderAddProjectForm = forwardRef<unknown, ProjectListHeaderAddProjectFormProps>((
	{
		mutate,
		disabled,
	},
	ref,
) => {
	const handleSubmit = (values: AddProjectFormValues) => {
		const submitData: AddProjectMutationData = {
			...values,
			[ProjectsListFormField.StartDate]: values[ProjectsListFormField.StartDate].toISOString(),
		};

		mutate(submitData);
	};

	return (
		<Formik
			innerRef={ref as Ref<FormikProps<AddProjectFormValues>>}
			initialValues={ADD_PROJECT_FORM_INITIAL_VALUES}
			onSubmit={handleSubmit}
			validateOnBlur
		>
			<Form>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}>
					<TextBoxField
						fieldProps={{
							name: ProjectsListFormField.Title,
							validate: combineValidators(
								required(),
								length({
									max: 128,
								}),
							),
						}}
						label="Title"
						required
						disabled={disabled}
					/>
					<DatePickerField
						fieldProps={{
							name: ProjectsListFormField.StartDate,
							validate: combineValidators(
								required(),
								date({
									min: DEFAULT_MIN_DATE,
									max: DEFAULT_MAX_DATE,
								}),
							),
						}}
						label="Start date"
						required
						disabled={disabled}
					/>
					<SelectField
						fieldProps={{
							name: ProjectsListFormField.CoordinatorId,
							validate: required(),
						}}
						label="Coordinator"
						items={COORDINATORS_MOCK_DATA}
						required
						disabled={disabled}
					/>
				</Box>
			</Form>
		</Formik>
	);
});

ProjectListHeaderAddProjectForm.displayName = 'ProjectListHeaderAddProjectForm';
