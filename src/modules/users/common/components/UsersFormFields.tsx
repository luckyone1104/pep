import React, { FC } from 'react';
import { ColumnBalancer } from '../../../../components/ColumnBalancer';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { UsersFormField } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { useRolesDropdownItems } from '../hooks/useRolesDropdownItems';
import { useUsersTechLevels } from '../hooks/useUsersTechLevels';
import { useUsersTeams } from '../hooks/useUsersTeams';
import { useUsersEnglishLevels } from '../hooks/useUsersEnglishLevels';
import { ErrorMessage } from '../../../../const/errors';

type UsersFormFieldsProps = {
	disabled?: boolean;
};

export const UsersFormFields: FC<UsersFormFieldsProps> = ({ disabled }) => {
	const {
		data: roles,
		isLoading: isRolesQueryLoading,
		error: rolesQueryError,
	} = useRolesDropdownItems();
	const rolesSelectFieldError = rolesQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	const {
		data: techLevels,
		isLoading: isTechLevelsQueryLoading,
		error: techLevelsQueryError,
	} = useUsersTechLevels();
	const techLevelsSelectFieldError = techLevelsQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	const {
		data: teams,
		isLoading: isTeamsQueryLoading,
		error: teamsQueryError,
	} = useUsersTeams();
	const teamsSelectFieldError = teamsQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	const {
		data: englishLevels,
		isLoading: isEnglishLevelsQueryLoading,
		error: englishLevelsQueryError,
	} = useUsersEnglishLevels();
	const englishLevelsSelectFieldError = englishLevelsQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	return (
		<ColumnBalancer>
			<TextBoxField
				fieldProps={{
					name: UsersFormField.FirstName,
				}}
				label="First name"
				disabled={disabled}
			/>
			<TextBoxField
				fieldProps={{
					name: UsersFormField.LastName,
				}}
				label="Last name"
				disabled={disabled}
			/>
			<TextBoxField
				fieldProps={{
					name: UsersFormField.Email,
				}}
				label="Email"
				disabled={disabled}
			/>
			<SelectField
				items={roles}
				fieldProps={{
					name: UsersFormField.RoleIds,
				}}
				multiple
				label="Role"
				disabled={isRolesQueryLoading || disabled}
				customError={rolesSelectFieldError}
			/>
			<SelectField
				items={techLevels}
				fieldProps={{
					name: UsersFormField.TechnicalLevelId,
				}}
				label="Technical level"
				disabled={isTechLevelsQueryLoading || disabled}
				customError={techLevelsSelectFieldError}
			/>
			<SelectField
				items={teams}
				fieldProps={{
					name: UsersFormField.TeamId,
				}}
				label="Team"
				disabled={isTeamsQueryLoading || disabled}
				customError={teamsSelectFieldError}
			/>
			<SelectField
				items={englishLevels}
				fieldProps={{
					name: UsersFormField.EnglishLevelId,
				}}
				label="English level"
				disabled={isEnglishLevelsQueryLoading || disabled}
				customError={englishLevelsSelectFieldError}
			/>
			<DatePickerField
				fieldProps={{
					name: UsersFormField.FirstDayInCompany,
				}}
				label="First day in industry"
			/>
			<DatePickerField
				fieldProps={{
					name: UsersFormField.FirstDayInIndustry,
				}}
				label="First day in company"
			/>
		</ColumnBalancer>
	);
};
