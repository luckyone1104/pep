import { get } from '../../api';

export const fetchDetailQueryData = async (url: string) => {
	const response = await get(url);

	return response.data;
};
