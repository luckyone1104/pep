import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { FIELDS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { AddFieldModalProvider } from './providers/AddFieldModalProvider';
import { ListLayout } from '../../../components/List';
import { FieldsListHeader } from './components/FieldsListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { FieldsListTable } from './components/FieldsListTable';
import { FieldsListSidebar } from './components/FieldsListSidebar';

export const FieldsList: FC = () => {
	return (
		<ListProviders
			url={FIELDS_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<AddFieldModalProvider>
				<ListLayout>
					<FieldsListHeader />
					<FilterBreadCrumbs />
					<FieldsListTable />
				</ListLayout>
			</AddFieldModalProvider>
			<FieldsListSidebar />
		</ListProviders>
	);
};
