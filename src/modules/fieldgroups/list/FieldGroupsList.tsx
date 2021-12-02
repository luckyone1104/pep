import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { FIELD_GROUPS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { AddFieldGroupModalProvider } from './providers/AddFieldGroupModalProvider';
import { ListLayout } from '../../../components/List';
import { FieldGroupsListHeader } from './components/FieldGroupsListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { FieldGroupsListTable } from './components/FieldGroupsListTable';

export const FieldGroupsList: FC = () => {
	return (
		<ListProviders
			url={FIELD_GROUPS_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<AddFieldGroupModalProvider>
				<ListLayout>
					<FieldGroupsListHeader />
					<FilterBreadCrumbs />
					<FieldGroupsListTable />
				</ListLayout>
			</AddFieldGroupModalProvider>
		</ListProviders>
	);
};
