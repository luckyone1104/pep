import { UseInfiniteQueryResult } from 'react-query/types/react/types';
import { CustomObject } from '../../types';

export type ListData<ListItem = CustomObject> = {
	totalItemsCount?: number;
	items: ListItem[];
}

export type ListQueryContextType<ListItemType> = UseInfiniteQueryResult<ListData<ListItemType>>;
