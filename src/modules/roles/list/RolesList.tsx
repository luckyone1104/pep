import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { ROLES_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { ListLayout } from '../../../components/List';
import { RolesListHeader } from './components/RolesListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { RolesListTable } from './components/RolesListTable';
import { AddRoleModalProvider } from './providers/AddRoleModalProvider';

export const RolesList: FC = () => {
	return (
		<ListProviders
			url={ROLES_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<AddRoleModalProvider>
				<ListLayout>
					<RolesListHeader />
					<FilterBreadCrumbs />
					<RolesListTable />
				</ListLayout>
			</AddRoleModalProvider>
		</ListProviders>

	);
};
