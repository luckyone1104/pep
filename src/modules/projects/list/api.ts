import axios from 'axios';
import { PROJECTS_LIST_URL } from './const';
import { AddProjectMutationData } from './types';
import { CustomObject } from '../../../types';
import { MutationFunction } from 'react-query';

export const postProject: MutationFunction<CustomObject, AddProjectMutationData> =  (data) => {
	return axios.post(PROJECTS_LIST_URL, data);
};
