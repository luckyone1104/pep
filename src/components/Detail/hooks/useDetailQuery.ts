import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { DETAIL_QUERY_KEY } from '../const';
import { fetchDetailQueryData } from '../api';
import { RouteIdParamOnly } from '../../../types';

export const useDetailQuery = (url: string) => {
	const { id } = useParams<RouteIdParamOnly>();
	const { pathname } = useLocation();

	return useQuery([DETAIL_QUERY_KEY, pathname], () =>
		fetchDetailQueryData(`${url}/${id}`)
	);
};
