import formatISO from 'date-fns/formatISO';
import { ProjectFormValues } from './types';
import { ProjectFormField } from './const';
import { ProjectsDetailData } from '../detail/types';

export const formatProjectSubmitValues = (values: ProjectFormValues): ProjectsDetailData => {
	return {
		...values,
		[ProjectFormField.StartDate]: formatISO(values[ProjectFormField.StartDate], { representation: 'date' }),
		[ProjectFormField.CoordinatorId]: Number(values[ProjectFormField.CoordinatorId]),
	};
};
