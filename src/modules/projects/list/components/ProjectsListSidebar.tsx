import React, { FC } from 'react';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { ProjectsListQueryParam } from '../const';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { SelectField } from 'src/components/adapters/SelectField';
import { useProjectsCoordinators } from '../../common/hooks/useProjectsCoordinators';
import { ProjectListSidebarFilterValues } from '../types';
import { useProjectsFilterInitialValues } from '../hooks/useProjectsFilterInitialValues';

export const ProjectsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useProjectsFilterInitialValues();
	const { data: coordinators, isLoading, error } = useProjectsCoordinators();
	const coordinatorsSelectError = !error ? null : 'Could not load dropdown items';

	const handleSubmit = (values: ProjectListSidebarFilterValues) => {
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
					name: ProjectsListQueryParam.Search,
				}}
				label="Search by project title"
			/>
			<SelectField
				fieldProps={{
					name: ProjectsListQueryParam.CoordinatorIds,
				}}
				label="Coordinator"
				items={coordinators}
				multiple
				isLoading={isLoading}
				customError={coordinatorsSelectError}
			/>
		</FilterSidebar>
	);
};
