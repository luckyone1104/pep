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

export const FormsListSidebar: FC = () => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();
	const initialValues = useFormsListFilterInitialValues();

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
					name: FormsListQueryParam.StateId
				}}
				label="State"
				items={[]/*todo: add*/}
			/>
			<SelectField
				fieldProps={{
					name: FormsListQueryParam.AssigneeIds
				}}
				label="Assignee"
				items={[]/*todo: add*/}
				multiple
			/>
			<SelectField
				fieldProps={{
					name: FormsListQueryParam.ReviewersIds
				}}
				label="Reviewer"
				items={[]/*todo: add*/}
				multiple
			/>
			<DatePickerField
				fieldProps={{
					name: FormsListQueryParam.AppointmentDateFrom
				}}
				label="Appointment date from"
			/>
			<DatePickerField
				fieldProps={{
					name: FormsListQueryParam.AppointmentDateTo
				}}
				label="Appointment date to"
			/>
		</FilterSidebar>
	);
};
