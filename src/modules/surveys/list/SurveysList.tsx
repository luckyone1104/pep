import { FC } from 'react';
import { ListProviders } from '../../../components/List/providers';
import { SURVEYS_URL } from '../common/const';
import { SORT_FIELD_PAIRS } from './const';
import { AddSurveyModalProvider } from './providers/AddSurveyModalProvider';
import { ListLayout } from '../../../components/List';
import { SurveysListHeader } from './components/SurveysListHeader';
import { FilterBreadCrumbs } from '../../../components/FilterBreadCrumbs';
import { SurveysListTable } from './components/SurveysListTable';

export const SurveysList: FC = () => {
	return (
		<ListProviders
			url={SURVEYS_URL}
			sortFieldsPairs={SORT_FIELD_PAIRS}
		>
			<AddSurveyModalProvider>
				<ListLayout>
					<SurveysListHeader />
					<FilterBreadCrumbs />
					<SurveysListTable />
				</ListLayout>
			</AddSurveyModalProvider>
		</ListProviders>
	);
};
