import { AddProjectMutationData } from './types';
import { CustomObject } from '../../../types';
import { MutationFunction } from 'react-query';
import { post } from '../../../api';
import { PROJECTS_URL } from '../common/const';

export const postProject: MutationFunction<CustomObject, AddProjectMutationData> = (data) => {
	return post<CustomObject, AddProjectMutationData>(PROJECTS_URL, data);
};
