import React, { FC } from 'react';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { useTeamsListFilterInitialValues } from '../hooks/useTeamsListFilterInitialValues';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { TeamsListFilterValues } from '../types';
import { TextBoxField } from 'src/components/adapters/TextBoxField';
import { TeamsListQueryParam } from '../const';
import { SelectField } from 'src/components/adapters/SelectField';
import { useProjectsDropdownItems } from '../../common/hooks/useProjectsDropdownItems';

export const TeamsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useTeamsListFilterInitialValues();
	const { data: projects, isLoading, error } = useProjectsDropdownItems();
	const projectsSelectError = !error ? null : 'Could not load dropdown items';

	const handleSubmit = (values: TeamsListFilterValues) => {
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
					name: TeamsListQueryParam.Search,
				}}
				label="Search by project title"
			/>
			<SelectField
				fieldProps={{
					name: TeamsListQueryParam.ProjectIds,
				}}
				label="Project"
				items={projects}
				multiple
				isLoading={isLoading}
				customError={projectsSelectError}
			/>
		</FilterSidebar>
	);
};
