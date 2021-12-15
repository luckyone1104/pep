import React, { FC } from 'react';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useDocumentsListFilterInitialValues } from '../hooks/useDocumentsListFilterInitialValues';
import { DocumentsListFilterValues } from '../types';
import { formatFormValues } from '../utils';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { DocumentsListQueryParam } from '../const';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { SelectField } from '../../../../components/adapters/SelectField';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { useDocumentsTypes } from '../../common/hooks/useDocumentsTypes';

export const DocumentsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useDocumentsListFilterInitialValues();
	const { data: typeIds, isLoading: isTypeIdsQueryLoading } = useDocumentsTypes();

	const handleSubmit = (values: DocumentsListFilterValues) => {
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
					name: DocumentsListQueryParam.Search
				}}
				label="Search by file name"
			/>
			<SelectField
				fieldProps={{
					name: DocumentsListQueryParam.UserIds
				}}
				items={[]/*add endpoint for users*/}
				label="User"
				multiple
			/>
			<SelectField
				fieldProps={{
					name: DocumentsListQueryParam.TypeIds
				}}
				items={typeIds}
				label="Document type"
				multiple
				isLoading={isTypeIdsQueryLoading}
			/>
			<DatePickerField
				fieldProps={{
					name: DocumentsListQueryParam.ValidTo,
				}}
				label="Expires until"
			/>
		</FilterSidebar>
	);
};
