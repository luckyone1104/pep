import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { FORMS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { ListLayout } from '../../../components/List';
import { FormsHeader } from './components/FormsHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { FormsTable } from './components/FormsTable';
import { FormsListSidebar } from './components/FormsListSidebar';

export const FormsList: FC = () => {
	return (
		<ListProviders
			url={FORMS_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<ListLayout>
				<FormsHeader />
				<FilterBreadCrumbs />
				<FormsTable />
			</ListLayout>
			<FormsListSidebar />
		</ListProviders>
	);
};
