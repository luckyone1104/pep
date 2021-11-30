import { CustomObject } from '../../types';
import axios from 'axios';
import qs from 'qs';

export const fetchListQueryData = async (url: string, params: CustomObject) => {
	const response = await axios.get(url, {
		params,
		paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
	});

	return response.data;
};
