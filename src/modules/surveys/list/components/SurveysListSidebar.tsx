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

export const SurveysListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useSurveysListFilterInitialValues();

	const handleSubmit = (values: SurveysListSidebarFilterValues) => {
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
					name: SurveysListQueryParam.Search
				}}
				label="Search by Form name or Assignee"
			/>
			<SelectField
				fieldProps={{
					name: SurveysListQueryParam.StateIds
				}}
				items={[]/*todo: add*/}
				multiple
				label="State"
			/>
			<SelectField
				fieldProps={{
					name: SurveysListQueryParam.AssigneeIds
				}}
				items={[]/*todo: add*/}
				multiple
				label="Assignee"
			/>
			<SelectField
				fieldProps={{
					name: SurveysListQueryParam.SupervisorIds
				}}
				items={[]/*todo: add*/}
				multiple
				label="Supervisor"
			/>
			<DatePickerField
				fieldProps={{
					name: SurveysListQueryParam.AppointmentDateFrom
				}}
				label="Appointment date from"
			/>
			<DatePickerField
				fieldProps={{
					name: SurveysListQueryParam.AppointmentDateTo
				}}
				label="Appointment date from"
			/>
		</FilterSidebar>
	);
};
