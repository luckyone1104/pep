import React, { FC } from 'react';
import { ListSortContext } from './const';
import { isUndefined } from '../../../utils';
import { normalizeSortValue, parseSortValue } from './utils';
import { GridSortModel } from '@mui/x-data-grid';
import { useListPaginationParamsContext } from '../hooks/useListPaginationParamsContext';
import { useListUrlQueryParamsContext } from '../hooks/useListUrlQueryParamsContext';

type ListSortProviderProps = {
	sortFieldsPairs?: string[][],
}

export const ListSortProvider: FC<ListSortProviderProps> = (
	{
		sortFieldsPairs = [],
		children
	}
) => {
	const { urlQueryParams, setUrlQueryParams } = useListUrlQueryParamsContext();
	const { setPage } = useListPaginationParamsContext();

	const getSortModel = () => {
		const sortingFields = sortFieldsPairs.map(([, sortField]) => sortField);
		const currentSortField = Object.keys(urlQueryParams)
			.find(key => sortingFields.includes(key));

		if (isUndefined(currentSortField)) {
			return [];
		}

		const currentSortFieldValue = urlQueryParams[currentSortField];
		const currentFormField = sortFieldsPairs.find(([, filterField]) => {
			return filterField === currentSortField;
		})![0];

		if (currentSortFieldValue !== '1' && currentSortFieldValue !== '2') {
			return [];
		}

		return [{
			field: currentFormField,
			sort: normalizeSortValue(currentSortFieldValue)
		}];
	};

	const handleSort = (model: GridSortModel) => {
		const sortData = sortFieldsPairs.reduce((acc, [columnField, filterField]) => {
			const isSearchedField = columnField === model[0]?.field;
			const sortType = model[0] && model[0].sort;

			return {
				...acc,
				[filterField]: isSearchedField && sortType
					? parseSortValue(sortType)
					: null
			};
		}, {});

		setPage(0);
		setUrlQueryParams({
			...urlQueryParams,
			...sortData,
		});
	};

	return (
		<ListSortContext.Provider value={{
			sortModel: getSortModel(),
			handleSort
		}}>
			{children}
		</ListSortContext.Provider>
	);
};
