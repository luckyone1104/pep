import { ProjectFormValues } from './types';
import { ProjectFormField } from './const';
import { ProjectsDetailData } from '../detail/types';

export const formatProjectSubmitValues = (values: ProjectFormValues): ProjectsDetailData => {
	return {
		...values,
		[ProjectFormField.StartDate]: values[ProjectFormField.StartDate].toISOString(),
		[ProjectFormField.CoordinatorId]: Number(values[ProjectFormField.CoordinatorId]),
	};
};
