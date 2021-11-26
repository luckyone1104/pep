import { useContext } from 'react';
import { isNull } from '../../../utils';
import { GridSortModel } from '@mui/x-data-grid';
import { ListSortContext } from '../providers/const';

type ListSortContextType = {
	sortModel: GridSortModel;
	handleSort: (model: GridSortModel) => void;
}

export const useListSortContext = () => {
	const context = useContext(ListSortContext);

	if (isNull(context)) {
		throw new Error('Please, provide ListSortProvider');
	}

	return context as ListSortContextType;
};
