import React, { FC } from 'react';
import formatISO from 'date-fns/formatISO';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useDeeplinksFilterInitialValues } from '../hooks/useDeeplinksFilterInitialValues';
import { useDeeplinksStates } from '../../common/hooks/useDeeplinksStates';
import { useDeeplinksUsers } from '../../common/hooks/useDeeplinksUsers';
import { DeeplinksListFilterValues } from '../types';
import { FilterSidebar } from 'src/components/FilterSidebar';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { DeeplinksListQueryParam } from '../const';
import { SelectField } from 'src/components/adapters/SelectField';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { ErrorMessage } from '../../../../const/errors';

const formatValues = (values: DeeplinksListFilterValues) => {
	const expiresAtFromDate = values[DeeplinksListQueryParam.ExpiresAtFrom];
	const expiresAtToDate = values[DeeplinksListQueryParam.ExpiresAtTo];

	return {
		...values,
		[DeeplinksListQueryParam.ExpiresAtFrom]:
			expiresAtFromDate === '' ? '' : formatISO(expiresAtFromDate),
		[DeeplinksListQueryParam.ExpiresAtTo]:
			expiresAtToDate === '' ? '' : formatISO(expiresAtToDate),
	};
};

export const DeeplinksListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } =
		useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useDeeplinksFilterInitialValues();
	const {
		data: users,
		isLoading: isUsersQueryLoading,
		error: usersQueryError,
	} = useDeeplinksUsers();
	const {
		data: states,
		isLoading: isStatesQueryLoading,
		error: statesQueryError,
	} = useDeeplinksStates();
	const usersSelectFieldError = !usersQueryError
		? null
		: ErrorMessage.CouldNotLoadItems;
	const statesSelectFieldError = !statesQueryError
		? null
		: ErrorMessage.CouldNotLoadItems;

	const handleSubmit = (values: DeeplinksListFilterValues) => {
		setPage(0);
		setUrlQueryParams({
			...urlQueryParams,
			...formatValues(values),
		});
	};

	return (
		<FilterSidebar initialValues={initialValues} onSubmit={handleSubmit}>
			<TextBoxField
				fieldProps={{
					name: DeeplinksListQueryParam.Search,
				}}
				label="Search by form or user name"
			/>
			<SelectField
				fieldProps={{
					name: DeeplinksListQueryParam.SentToId,
				}}
				label="Sent to"
				items={users}
				isLoading={isUsersQueryLoading}
				customError={usersSelectFieldError}
			/>
			<DatePickerField
				fieldProps={{
					name: DeeplinksListQueryParam.ExpiresAtFrom,
				}}
				label="Expires at from"
			/>
			<DatePickerField
				fieldProps={{
					name: DeeplinksListQueryParam.ExpiresAtTo,
				}}
				label="Expires at to"
			/>
			<SelectField
				fieldProps={{
					name: DeeplinksListQueryParam.StateIds,
				}}
				items={states}
				label="State"
				multiple
				isLoading={isStatesQueryLoading}
				customError={statesSelectFieldError}
			/>
		</FilterSidebar>
	);
};
