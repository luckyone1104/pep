import { useListQueryContext } from '../../../../components/List/hooks/useListQueryContext';
import { UsersListData } from '../types';

export const useUsersListData = () => {
	return useListQueryContext<UsersListData>();
};
