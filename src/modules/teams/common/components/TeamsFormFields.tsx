import React, { FC } from 'react';
import { ColumnBalancer } from '../../../../components/ColumnBalancer';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { TeamsFormField } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { useProjectsDropdownItems } from '../hooks/useProjectsDropdownItems';
import { useTeamsTeamLeads } from '../hooks/useTeamsTeamLeads';

type TeamsFormFieldsProps = {
	disabled?: boolean;
};

export const TeamsFormFields: FC<TeamsFormFieldsProps> = ({ disabled }) => {
	const { data: projects, isLoading: isProjectsQueryLoading } =
		useProjectsDropdownItems();
	const { data: teamLeads, isLoading: isTeamLeadsQueryLoading } =
		useTeamsTeamLeads();

	return (
		<ColumnBalancer>
			<TextBoxField
				fieldProps={{
					name: TeamsFormField.Title,
				}}
				label="Title"
				disabled={disabled}
			/>
			<SelectField
				items={projects}
				fieldProps={{
					name: TeamsFormField.ProjectId,
				}}
				label="Project"
				disabled={isProjectsQueryLoading || disabled}
			/>
			<TextBoxField
				fieldProps={{
					name: TeamsFormField.Size,
				}}
				label="Size"
				disabled={disabled}
			/>
			<SelectField
				items={teamLeads}
				fieldProps={{
					name: TeamsFormField.TeamLead,
				}}
				label="TeamLead"
				disabled={isTeamLeadsQueryLoading || disabled}
			/>
		</ColumnBalancer>
	);
};
