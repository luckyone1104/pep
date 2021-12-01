/*eslint-disable @typescript-eslint/no-explicit-any*/
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const put = <T = any, R = AxiosResponse<T>, D = any>(
	url: string,
	data?: D,
	config?: AxiosRequestConfig<D>
): Promise<R> => {
	return axios.put(url, data, config);
};
