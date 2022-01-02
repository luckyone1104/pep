import React, { FC } from 'react';
import { useListUrlQueryParamsContext } from '../../../../components/List/hooks/useListUrlQueryParamsContext';
import { useListPaginationParamsContext } from '../../../../components/List/hooks/useListPaginationParamsContext';
import { useSurveysListFilterInitialValues } from '../hooks/useSurveysListFilterInitialValues';
import { SurveysListSidebarFilterValues } from '../types';
import { formatFormValues } from '../utils';
import { FilterSidebar } from '../../../../components/FilterSidebar';
import { TextBoxField } from '../../../../components/adapters/TextBoxField';
import { SurveysListQueryParam } from '../const';
import { SelectField } from '../../../../components/adapters/SelectField';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';
import { useSurveysStates } from '../../common/hooks/useSurveysStates';
import { ErrorMessage } from '../../../../const/errors';
import { useSurveysAssignees } from '../../common/hooks/useSurveysAssignees';
import { useSurveysSupervisors } from '../../common/hooks/useSurveysSupervisors';

export const SurveysListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } =
		useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useSurveysListFilterInitialValues();
	const {
		data: states,
		isLoading: isStatesQueryLoading,
		error: statesQueryError,
	} = useSurveysStates();
	const {
		data: assignees,
		isLoading: isAssigneesLoading,
		error: assigneesQueryError,
	} = useSurveysAssignees();
	const {
		data: supervisors,
		isLoading: isSupervisorsQueryLoading,
		error: supervisorsQueryError,
	} = useSurveysSupervisors();

	const statesSelectFieldError = statesQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;
	const assigneesSelectFieldError = assigneesQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;
	const supervisorsSelectFieldError = supervisorsQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	const handleSubmit = (values: SurveysListSidebarFilterValues) => {
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
					name: SurveysListQueryParam.Search,
				}}
				label="Search by Form name or Assignee"
			/>
			<SelectField
				fieldProps={{
					name: SurveysListQueryParam.StateIds,
				}}
				items={states}
				isLoading={isStatesQueryLoading}
				multiple
				label="State"
				customError={statesSelectFieldError}
			/>
			<SelectField
				fieldProps={{
					name: SurveysListQueryParam.AssigneeIds,
				}}
				items={assignees}
				isLoading={isAssigneesLoading}
				multiple
				label="Assignee"
				customError={assigneesSelectFieldError}
			/>
			<SelectField
				fieldProps={{
					name: SurveysListQueryParam.SupervisorIds,
				}}
				items={supervisors}
				multiple
				isLoading={isSupervisorsQueryLoading}
				label="Supervisor"
				customError={supervisorsSelectFieldError}
			/>
			<DatePickerField
				fieldProps={{
					name: SurveysListQueryParam.AppointmentDateFrom,
				}}
				label="Appointment date from"
			/>
			<DatePickerField
				fieldProps={{
					name: SurveysListQueryParam.AppointmentDateTo,
				}}
				label="Appointment date from"
			/>
		</FilterSidebar>
	);
};
