import React, { FC } from 'react';
import { ErrorMessage } from '../../../../const/errors';
import { useAssessmentGroups } from '../hooks/useAssessmentGroups';
import { useFieldsTypes } from '../hooks/useFieldsTypes';
import { ColumnBalancer } from '../../../../components/ColumnBalancer';
import { FieldsFormField } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';

type FieldsFormFieldsProps = {
	disabled?: boolean;
};

export const FieldsFormFields: FC<FieldsFormFieldsProps> = ({ disabled }) => {
	const {
		data: types,
		isLoading: isTypesQueryLoading,
		error: typesQueryError,
	} = useFieldsTypes();
	const typeIdSelectFieldError = typesQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;
	const {
		data: assessmentGroups,
		isLoading: isAssessmentGroupsQueryLoading,
		error: assessmentGroupsQueryError,
	} = useAssessmentGroups();
	const assessmentGroupIdSelectFieldError = assessmentGroupsQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	return (
		<ColumnBalancer>
			<SelectField
				items={types}
				fieldProps={{
					name: FieldsFormField.TypeId,
				}}
				label="Type"
				disabled={isTypesQueryLoading || disabled}
				customError={typeIdSelectFieldError}
			/>
			<SelectField
				items={assessmentGroups}
				fieldProps={{
					name: FieldsFormField.AssessmentGroupId,
				}}
				label="Assessment Group"
				disabled={isAssessmentGroupsQueryLoading || disabled}
				customError={assessmentGroupIdSelectFieldError}
			/>
		</ColumnBalancer>
	);
};
