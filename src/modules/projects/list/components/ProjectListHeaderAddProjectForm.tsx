import React, { forwardRef, Ref } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import {
	ADD_PROJECT_FORM_INITIAL_VALUES,
	AddProjectFormValues,
	COORDINATORS_MOCK_DATA,
	ProjectsListFormField,
} from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { Box } from '@mui/material';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { combineValidators, date, length, required } from 'src/utils/validators';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from '../../../../components/adapters/DatePickerField/const';

export const ProjectListHeaderAddProjectForm = forwardRef((
	props,
	ref,
) => {
	const handleSubmit = (values: AddProjectFormValues) => {
		const submitData = {
			...values,
			[ProjectsListFormField.StartDate]: values[ProjectsListFormField.StartDate].toISOString(),
		};

		console.log('d:', submitData);
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
					/>
					<SelectField
						fieldProps={{
							name: ProjectsListFormField.CoordinatorId,
							validate: combineValidators(required()),
						}}
						label="Coordinator"
						multiple
						items={COORDINATORS_MOCK_DATA}
						required
					/>
				</Box>
			</Form>
		</Formik>
	);
});

ProjectListHeaderAddProjectForm.displayName = 'ProjectListHeaderAddProjectForm';