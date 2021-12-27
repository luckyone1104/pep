import React, { FC } from 'react';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useFormsListFilterInitialValues } from '../hooks/useFormsListFilterInitialValues';
import { FormsSidebarFilterValues } from '../types';
import { formatFormValues } from '../utils';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { FormsListQueryParam } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { useFormsStates } from '../../common/hooks/useFormsStates';
import { ErrorMessage } from '../../../../const/errors';
import { useFormsAssignees } from '../../common/hooks/useFormsAssignees';
import { useFormsReviewers } from '../../common/hooks/useFormsReviewers';

export const FormsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useFormsListFilterInitialValues();
	const { data: states, isLoading: isStatesQueryLoading, error: statesQueryError } = useFormsStates();
	const { data: assignees, isLoading: isAssigneesQueryLoading, error: assigneesQueryError } = useFormsAssignees();
	const { data: reviewers, isLoading: isReviewersQueryLoading, error: reviewersQueryError } = useFormsReviewers();
	const statesSelectFieldError = !statesQueryError ? null : ErrorMessage.CouldNotLoadItems;
	const assigneesSelectFieldError = !assigneesQueryError ? null : ErrorMessage.CouldNotLoadItems;
	const reviewersSelectFieldError = !reviewersQueryError ? null : ErrorMessage.CouldNotLoadItems;

	const handleSubmit = (values: FormsSidebarFilterValues) => {
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
					name: FormsListQueryParam.Search,
				}}
				label="Search by Form name, Assignee or Reviewer"
			/>
			<SelectField
				fieldProps={{
					name: FormsListQueryParam.StateId,
				}}
				label="State"
				items={states}
				isLoading={isStatesQueryLoading}
				customError={statesSelectFieldError}
			/>
			<SelectField
				fieldProps={{
					name: FormsListQueryParam.AssigneeIds,
				}}
				label="Assignee"
				items={assignees}
				multiple
				isLoading={isAssigneesQueryLoading}
				customError={assigneesSelectFieldError}
			/>
			<SelectField
				fieldProps={{
					name: FormsListQueryParam.ReviewersIds,
				}}
				label="Reviewer"
				items={reviewers}
				multiple
				isLoading={isReviewersQueryLoading}
				customError={reviewersSelectFieldError}
			/>
			<DatePickerField
				fieldProps={{
					name: FormsListQueryParam.AppointmentDateFrom,
				}}
				label="Appointment date from"
			/>
			<DatePickerField
				fieldProps={{
					name: FormsListQueryParam.AppointmentDateTo,
				}}
				label="Appointment date to"
			/>
		</FilterSidebar>
	);
};
