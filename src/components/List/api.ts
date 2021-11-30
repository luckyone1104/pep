import { CustomObject } from '../../types';
import { get } from '../../api';

export const fetchListQueryData = async (url: string, params: CustomObject) => {
	const response = await get(url, params);

	return response.data;
};
