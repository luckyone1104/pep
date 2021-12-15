import React, { FC } from 'react';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useUsersListFilterInitialValues } from '../hooks/useUsersListFilterInitialValues';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { UsersListFilterValues } from '../types';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { UsersListQueryParam } from '../const';
import { useRolesDropdownItems } from '../../common/hooks/useRolesDropdownItems';
import { SelectField } from '../../../../components/adapters/SelectField';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { formatFormValues } from '../utils';

export const UsersListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useUsersListFilterInitialValues();
	const { data: roles, isLoading: isRolesQueryLoading } = useRolesDropdownItems();

	const handleSubmit = (values: UsersListFilterValues) => {
		const formattedValues = formatFormValues(values);

		setPage(0);
		setUrlQueryParams({
			...urlQueryParams,
			...formattedValues,
		});
	};

	return (
		<FilterSidebar
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			<TextBoxField
				fieldProps={{
					name: UsersListQueryParam.Search,
				}}
				label="Search by email or name"
			/>
			<SelectField
				fieldProps={{
					name: UsersListQueryParam.RoleIds,
				}}
				label="Role"
				items={roles}
				multiple
				isLoading={isRolesQueryLoading}
			/>
			<DatePickerField
				fieldProps={{
					name: UsersListQueryParam.NextPEDate,
				}}
				label="Next PE date to"
			/>
		</FilterSidebar>
	);
};
