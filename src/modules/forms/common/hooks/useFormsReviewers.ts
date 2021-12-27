import { useQuery } from 'react-query';
import { FORMS_REVIEWERS_URL } from '../const';
import { getFormsReviewers } from '../api';

export const useFormsReviewers = () => {
	const query = useQuery(FORMS_REVIEWERS_URL, getFormsReviewers);

	return {
		...query,
		data: query.data || [],
	};
};