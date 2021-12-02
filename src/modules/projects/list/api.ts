import { AddProjectMutationData } from './types';
import { CustomObject } from '../../../types';
import { post } from '../../../api';
import { PROJECTS_URL } from '../common/const';

export const postProject = (data: AddProjectMutationData) => {
	return post<CustomObject, AddProjectMutationData>(PROJECTS_URL, data);
};
