import React, { FC } from 'react';
import qs from 'qs';
import { ListUrlQueryParamsContext } from './const';
import { useHistory, useLocation } from 'react-router-dom';
import { CustomObject } from '../../../types';
import { getNormalizedQueryParams } from './utils';

export const ListUrlQueryParamsProvider: FC = ({ children }) => {
	const history = useHistory();
	const { search } = useLocation();
	const urlQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

	const setUrlQueryParams = (params: CustomObject) => {
		const normalizedQueryParams = getNormalizedQueryParams(params);

		history.push({
			search: qs.stringify(normalizedQueryParams, { arrayFormat: 'repeat' }),
		});
	};

	return (
		<ListUrlQueryParamsContext.Provider value={{
			urlQueryParams,
			setUrlQueryParams,
		}}>
			{children}
		</ListUrlQueryParamsContext.Provider>
	);
};
