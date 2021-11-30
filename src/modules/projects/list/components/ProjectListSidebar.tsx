import React, { FC } from 'react';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { ProjectListFilterField, SIDEBAR_FORM_INITIAL_VALUES } from '../const';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { CustomObject } from '../../../../types';
import { SelectField } from 'src/components/adapters/SelectField';
import { useFilterInitialValues } from '../../../../hooks/useFilterInitialValues';
import { useProjectListCoordinators } from '../hooks/useProjectListCoordinators';

export const ProjectListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useFilterInitialValues<typeof SIDEBAR_FORM_INITIAL_VALUES>(SIDEBAR_FORM_INITIAL_VALUES);
	const { data: coordinators, isLoading } = useProjectListCoordinators();

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
				items={coordinators}
				multiple
				disabled={isLoading}
			/>
		</FilterSidebar>
	);
};
