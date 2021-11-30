import { PROJECTS_COORDINATORS_URL, PROJECTS_URL } from './const';
import { AddProjectMutationData } from './types';
import { CustomObject } from '../../../types';
import { MutationFunction } from 'react-query';
import { get, post } from '../../../api';

export const fetchCoordinators = async () => {
	const response = await get(PROJECTS_COORDINATORS_URL);

	return response.data;
};

export const postProject: MutationFunction<CustomObject, AddProjectMutationData> =  (data) => {
	return post<CustomObject, AddProjectMutationData>(PROJECTS_URL, data);
};
