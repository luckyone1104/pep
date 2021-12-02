import React, { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { FORM_TEMPLATES_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { ListLayout } from '../../../components/List';
import { AddFormTemplateModalProvider } from './providers';
import { FormTemplateHeader } from './components/FormTemplateHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { FormTemplatesTable } from './components/FormTemplatesTable';
import { FormTemplatesSidebar } from './components/FormTemplatesSidebar';

export const FormTemplatesList: FC = () => {
	return (
		<ListProviders
			url={FORM_TEMPLATES_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<AddFormTemplateModalProvider>
				<ListLayout>
					<FormTemplateHeader />
					<FilterBreadCrumbs />
					<FormTemplatesTable />
				</ListLayout>
			</AddFormTemplateModalProvider>
			<FormTemplatesSidebar />
		</ListProviders>
	);
};
