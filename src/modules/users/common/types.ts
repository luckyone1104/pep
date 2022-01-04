import { UsersFormField } from './const';

export type UsersFormValues = {
	[UsersFormField.FirstName]: string;
	[UsersFormField.LastName]: string;
	[UsersFormField.Email]: string;
	[UsersFormField.TeamId]: '' | number;
	[UsersFormField.TechnicalLevelId]: '' | number;
	[UsersFormField.RoleIds]: number[];
	[UsersFormField.EnglishLevelId]: '' | number;
	[UsersFormField.SystemRoleId]: '' | number;
	[UsersFormField.FirstDayInCompany]: '' | Date;
	[UsersFormField.FirstDayInIndustry]: '' | Date;
};
