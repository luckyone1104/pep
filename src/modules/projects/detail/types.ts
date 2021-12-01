import { ProjectFormField } from '../common/const';

export type ProjectsDetailData = {
	[ProjectFormField.Title]: string;
	[ProjectFormField.StartDate]: string;
	[ProjectFormField.CoordinatorId]: number;
}
