import React, { FC } from 'react';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { FormTemplatesQueryParam } from '../const';
import { FormTemplatesSidebarFilterValues } from '../types';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { SelectField } from '../../../../components/adapters/SelectField';
import { useFormTemplatesStatuses } from '../../common/hooks/useFormTemplateStatuses';
import { useFormTemplatesFilterInitialValues } from '../hooks/useFormTemplatesFilterInitialValues';

export const FormTemplatesSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useFormTemplatesFilterInitialValues();
	const { data: statuses, isLoading } = useFormTemplatesStatuses();

	const handleSubmit = (values: FormTemplatesSidebarFilterValues) => {
		console.log('values', values);

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
					name: FormTemplatesQueryParam.Search
				}}
				label="Search by name"
			/>
			<SelectField
				fieldProps={{
					name: FormTemplatesQueryParam.StatusIds
				}}
				label="Status"
				items={statuses}
				multiple
				disabled={isLoading}
			/>
		</FilterSidebar>
	);
};
