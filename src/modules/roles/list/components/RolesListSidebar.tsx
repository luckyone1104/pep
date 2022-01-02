import React, { FC } from 'react';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useRolesListFilterSidebarInitialValues } from '../hooks/useRolesListFilterSidebarInitialValues';
import { RolesListFilterValues } from '../types';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { SelectField } from '../../../../components/adapters/SelectField';
import { RolesListQueryParam } from '../const';

export const RolesListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } =
		useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useRolesListFilterSidebarInitialValues();

	const handleSubmit = (values: RolesListFilterValues) => {
		setPage(0);
		setUrlQueryParams({
			...urlQueryParams,
			...values,
		});
	};

	return (
		<FilterSidebar initialValues={initialValues} onSubmit={handleSubmit}>
			<TextBoxField
				fieldProps={{
					name: RolesListQueryParam.Search,
				}}
				label="Search by title"
			/>
			<SelectField
				fieldProps={{
					name: RolesListQueryParam.IsPrimary,
				}}
				items={[] /*todo: add*/}
				label="Primary only"
			/>
			<TextBoxField
				fieldProps={{
					name: RolesListQueryParam.UsersCountFrom,
				}}
				label="Count from"
			/>
			<TextBoxField
				fieldProps={{
					name: RolesListQueryParam.UsersCountTo,
				}}
				label="Count to"
			/>
		</FilterSidebar>
	);
};
