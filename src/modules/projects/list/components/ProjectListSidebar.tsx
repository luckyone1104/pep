import React, { FC } from 'react';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { ProjectListFilterField, SIDEBAR_FORM_INITIAL_VALUES } from '../const';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { CustomObject } from '../../../../types';

export const ProjectListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();

	const handleSubmit = (values: CustomObject) => {
		setPage(0);
		setUrlQueryParams({
			...urlQueryParams,
			...values,
		});
	};

	return (
		<FilterSidebar
			initialValues={SIDEBAR_FORM_INITIAL_VALUES}
			onSubmit={handleSubmit}
		>
			<TextBoxField
				fieldProps={{
					name: ProjectListFilterField.Search,
				}}
				label="Search by project title"
			/>
			{/*todo: add coordinators dropdown*/}
		</FilterSidebar>
	);
};
