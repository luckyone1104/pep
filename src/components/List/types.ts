import { UseInfiniteQueryResult } from 'react-query/types/react/types';
import { CustomObject } from '../../types';
import { GridCallbackDetails, GridRowParams, MuiEvent } from '@mui/x-data-grid';
import * as React$1 from 'react';

export type ListData<ListItem = CustomObject> = {
	totalItemsCount?: number;
	items: ListItem[];
}

export type ListQueryContextType<ListItemType> = UseInfiniteQueryResult<ListData<ListItemType>>;

export type HandleRowClickFunction = (params: GridRowParams, event: MuiEvent<React$1.SyntheticEvent>, details: GridCallbackDetails) => void;
