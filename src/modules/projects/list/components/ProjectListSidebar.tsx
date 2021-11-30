import React, { FC } from 'react';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { COORDINATORS_MOCK_DATA, ProjectListFilterField, SIDEBAR_FORM_INITIAL_VALUES } from '../const';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { CustomObject } from '../../../../types';
import { SelectField } from 'src/components/adapters/SelectField';
import { useFilterInitialValues } from '../../../../hooks/useFilterInitialValues';

export const ProjectListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useFilterInitialValues<typeof SIDEBAR_FORM_INITIAL_VALUES>(SIDEBAR_FORM_INITIAL_VALUES);

	const handleSubmit = (values: CustomObject) => {
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
					name: ProjectListFilterField.Search,
				}}
				label="Search by project title"
			/>
			<SelectField
				fieldProps={{
					name: ProjectListFilterField.CoordinatorIds,
				}}
				label="Coordinator"
				items={COORDINATORS_MOCK_DATA}
				multiple
			/>
		</FilterSidebar>
	);
};
