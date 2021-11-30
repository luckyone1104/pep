/*eslint-disable @typescript-eslint/no-explicit-any*/
import axios, { AxiosResponse } from 'axios';

export const post = <T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D): Promise<R> => {
	return axios.post(url, data);
};
