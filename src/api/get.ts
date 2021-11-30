/*eslint-disable @typescript-eslint/no-explicit-any*/
import axios, { AxiosResponse } from 'axios';
import qs from 'qs';

export const get = <T = any, R = AxiosResponse<T>, D = any>(url: string, params?: D): Promise<R> => {
	return axios.get(url, {
		params,
		paramsSerializer: (params) => qs.stringify(params, {
			arrayFormat: 'repeat'
		})
	});
};
