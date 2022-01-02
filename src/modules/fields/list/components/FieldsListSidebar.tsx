import React, { FC } from 'react';
import { useFieldsTypes } from '../../common/hooks/useFieldsTypes';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useFieldsListFilterInitialValues } from '../hooks/useFieldsListFilterInitialValues';
import { FieldsListFilterValues } from '../types';
import { FilterSidebar } from 'src/components/FilterSidebar';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { FieldsListQueryParam } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { useAssessmentGroups } from '../../common/hooks/useAssessmentGroups';
import { ErrorMessage } from '../../../../const/errors';

export const FieldsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } =
		useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useFieldsListFilterInitialValues();
	const {
		data: types,
		isLoading: isTypesQueryLoading,
		error: fieldsQueryError,
	} = useFieldsTypes();
	const {
		data: assessmentGroups,
		isLoading: isGroupsQueryLoading,
		error: assessmentGroupsQueryError,
	} = useAssessmentGroups();
	const typesSelectFieldError = !fieldsQueryError
		? null
		: ErrorMessage.CouldNotLoadItems;
	const assessmentGroupsSelectFieldError = !assessmentGroupsQueryError
		? null
		: ErrorMessage.CouldNotLoadItems;

	const handleSubmit = (values: FieldsListFilterValues) => {
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
					name: FieldsListQueryParam.Search,
				}}
				label="Search by name"
			/>
			<SelectField
				fieldProps={{
					name: FieldsListQueryParam.TypeIds,
				}}
				label="Type"
				items={types}
				multiple
				isLoading={isTypesQueryLoading}
				customError={typesSelectFieldError}
			/>
			<SelectField
				fieldProps={{
					name: FieldsListQueryParam.AssesmentGroupIds,
				}}
				label="Assessment group"
				items={assessmentGroups}
				multiple
				isLoading={isGroupsQueryLoading}
				customError={assessmentGroupsSelectFieldError}
			/>
		</FilterSidebar>
	);
};
