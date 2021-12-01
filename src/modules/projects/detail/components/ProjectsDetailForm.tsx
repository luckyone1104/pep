import React, { FC, useMemo } from 'react';
import { Form, Formik } from 'formik';
import { useDetailQueryContext } from '../../../../components/Detail/hooks/useDetailQueryContext';
import { ProjectsDetailData } from '../types';
import { isUndefined } from '../../../../utils';
import { ProjectFormFields } from '../../common/components/ProjectFormFields';
import { SkeletonFields } from '../../../../components/SkeletonFields';
import { PROJECT_FORM_DEFAULT_VALUES, ProjectFormField } from '../../common/const';
import { ProjectFormValues } from '../../common/types';
import { ProjectDetailFormButtons } from './ProjectDetailFormButtons';
import { formatProjectSubmitValues } from '../../common/utils';
import { useUpdateProjectDataMutation } from '../hooks/useUpdateProjectDataMutation';
import { useParams } from 'react-router-dom';
import { RouteIdParamOnly } from '../../../../types';

export const ProjectsDetailForm: FC = () => {
	const { id } = useParams<RouteIdParamOnly>();
	const { data, isLoading: isProjectDataLoading, isSuccess } = useDetailQueryContext<ProjectsDetailData>();
	const formattedData = useMemo(() => {
		if (isUndefined(data)) {
			return;
		}

		return {
			...data,
			[ProjectFormField.StartDate]: new Date(data[ProjectFormField.StartDate]),
		};
	}, [data]);
	const { mutate, isLoading: isMutationPending } = useUpdateProjectDataMutation();

	const handleSubmit = (values: ProjectFormValues) => {
		mutate({
			id,
			data: formatProjectSubmitValues(values)
		});
	};

	return (
		<Formik
			initialValues={formattedData || PROJECT_FORM_DEFAULT_VALUES}
			onSubmit={handleSubmit}
			enableReinitialize
		>
			<Form>
				{isProjectDataLoading && (
					<SkeletonFields fieldsCount={3} />
				)}
				{isSuccess && (
					<ProjectFormFields />
				)}
				<ProjectDetailFormButtons isLoading={isMutationPending} />
			</Form>
		</Formik>
	);
};
