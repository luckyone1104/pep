import axios from 'axios';
import qs from 'qs';
import { PROJECTS_COORDINATORS_URL, PROJECTS_LIST_URL } from './const';
import { AddProjectMutationData } from './types';
import { CustomObject } from '../../../types';
import { MutationFunction } from 'react-query';

export const fetchCoordinators = async () => {
	const response = await axios.get(PROJECTS_COORDINATORS_URL, {
		paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
	});

	return response.data;
}

export const postProject: MutationFunction<CustomObject, AddProjectMutationData> =  (data) => {
	return axios.post(PROJECTS_LIST_URL, data);
};
