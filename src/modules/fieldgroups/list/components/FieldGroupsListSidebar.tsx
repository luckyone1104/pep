import React, { FC } from 'react';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useFieldGroupsListFilterInitialValues } from '../hooks/useFieldGroupsListFilterInitialValues';
import { FieldGroupsListFilterValues } from '../types';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { FieldGroupListQueryParam } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';

export const FieldGroupsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useFieldGroupsListFilterInitialValues();

	const handleSubmit = (values: FieldGroupsListFilterValues) => {
		setPage(0);
		setUrlQueryParams({
			...urlQueryParams,
			...values,
		});
	};

	return (
		<FilterSidebar
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			<TextBoxField
				fieldProps={{
					name: FieldGroupListQueryParam.Search
				}}
				label="Search by title"
			/>
			<SelectField
				fieldProps={{
					name: FieldGroupListQueryParam.IsNotEmpty
				}}
				items={[]/*todo: add*/}
				label="Only not empty"
			/>
			<TextBoxField
				fieldProps={{
					name: FieldGroupListQueryParam.CountFrom
				}}
				label="Count from"
			/>
			<TextBoxField
				fieldProps={{
					name: FieldGroupListQueryParam.CountTo
				}}
				label="Count to"
			/>
		</FilterSidebar>
	);
};
