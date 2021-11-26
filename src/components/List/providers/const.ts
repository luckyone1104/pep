import { createContext } from 'react';

export const ListQueryContext = createContext(null as unknown);
export const ListSortContext = createContext(null as unknown);
export const ListUrlQueryParamsContext = createContext(null as unknown);
export const ListPaginationParamsContext = createContext(null as unknown);

export enum Take {
	Small = 25,
	Medium = 50,
	Large = 100,
}
