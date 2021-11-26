import axios from 'axios';
import { CustomObject } from '../types';

export const fetchListQueryData = async (url: string, params: CustomObject) => {
	const response = await axios.get(url, { params });

	return response.data;
};
