import { useContext } from 'react';
import { isNull } from '../../../utils';
import { ListQueryContext } from '../providers/const';
import { ListQueryContextType } from '../types';
import { CustomObject } from '../../../types';

export const useListQueryContext = <ListItemType = CustomObject>() => {
	const context = useContext(ListQueryContext);

	if (isNull(context)) {
		throw new Error('Please, provide ListQueryProvider');
	}

	return context as ListQueryContextType<ListItemType>;
};
