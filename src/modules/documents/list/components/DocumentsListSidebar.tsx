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
import { ErrorMessage } from '../../../../const/errors';
import { useDocumentsUsers } from '../../common/hooks/useDocumentsUsers';

export const DocumentsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } =
		useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useDocumentsListFilterInitialValues();
	const {
		data: users,
		isLoading: isUsersQueryLoading,
		error: usersQueryError,
	} = useDocumentsUsers();
	const userIdsSelectFieldError = usersQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;
	const {
		data: documentsTypes,
		isLoading: isDocumentTypesQueryLoading,
		error: documentsTypesQueryError,
	} = useDocumentsTypes();
	const typeIdsSelectFieldError = documentsTypesQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	const handleSubmit = (values: DocumentsListFilterValues) => {
		const formattedValues = formatFormValues(values);

		setPage(0);
		setUrlQueryParams({
			...urlQueryParams,
			...formattedValues,
		});
	};

	return (
		<FilterSidebar initialValues={initialValues} onSubmit={handleSubmit}>
			<TextBoxField
				fieldProps={{
					name: DocumentsListQueryParam.Search,
				}}
				label="Search by file name"
			/>
			<SelectField
				fieldProps={{
					name: DocumentsListQueryParam.UserIds,
				}}
				items={users}
				label="User"
				multiple
				isLoading={isUsersQueryLoading}
				customError={userIdsSelectFieldError}
			/>
			<SelectField
				fieldProps={{
					name: DocumentsListQueryParam.TypeIds,
				}}
				items={documentsTypes}
				label="Document type"
				multiple
				isLoading={isDocumentTypesQueryLoading}
				customError={typeIdsSelectFieldError}
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
