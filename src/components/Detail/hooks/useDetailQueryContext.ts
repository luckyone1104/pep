import { useContext } from 'react';
import { DetailQueryContext } from '../const';
import { isNull } from '../../../utils';
import { DetailQueryContextType } from '../types';

export const useDetailQueryContext = <T>() => {
	const context = useContext(DetailQueryContext);

	if (isNull(context)) {
		throw new Error('Please, provide DetailProvider');
	}

	return context as DetailQueryContextType<T>;
};
