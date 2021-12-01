import React, { FC } from 'react';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { combineValidators, date, length, required } from '../../../../utils/validators';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from '../../../../components/adapters/DatePickerField/const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { ProjectFormField } from '../const';
import { useProjectsCoordinators } from '../hooks/useProjectsCoordinators';
import { ColumnBalancer } from '../../../../components/ColumnBalancer';

type ProjectFormFieldsProps = {
	disabled?: boolean
}

export const ProjectFormFields: FC<ProjectFormFieldsProps> = (
	{
		disabled
	}
) => {
	const { data: coordinators, isLoading } = useProjectsCoordinators();

	return (
		<ColumnBalancer>
			<TextBoxField
				fieldProps={{
					name: ProjectFormField.Title,
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
					name: ProjectFormField.StartDate,
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
					name: ProjectFormField.CoordinatorId,
					validate: required()
				}}
				label="Coordinator"
				items={coordinators}
				required
				disabled={isLoading || disabled}
			/>
		</ColumnBalancer>
	);
};
