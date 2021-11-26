import React, { FC } from 'react';
import { ListUrlQueryParamsContext } from './const';
import { useHistory, useLocation } from 'react-router-dom';
import { CustomObject } from '../../../types';
import { getNormalizedQueryParams } from './utils';

export const ListUrlQueryParamsProvider: FC = ({ children }) => {
	const { search } = useLocation();
	const history = useHistory();
	const queryParamsInstance = new URLSearchParams(search);
	const urlQueryParams: CustomObject = {};
	// @ts-ignore
	for (const [key, value] of queryParamsInstance) {
		urlQueryParams[key] = value;
	}

	const setUrlQueryParams = (params: CustomObject) => {
		const normalizedQueryParams = getNormalizedQueryParams(params);

		history.push({
			search: new URLSearchParams(normalizedQueryParams).toString(),
		});
	};

	return (
		<ListUrlQueryParamsContext.Provider value={{
			urlQueryParams,
			setUrlQueryParams
		}}>
			{children}
		</ListUrlQueryParamsContext.Provider>
	);
};
