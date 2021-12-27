import { BASE_API_URL } from '../../../api';

export const FORMS_URL = `${BASE_API_URL}/forms`;
export const FORMS_STATES_URL = FORMS_URL.concat('/states');
export const FORMS_ASSIGNEES_URL = FORMS_URL.concat('/assignees');
export const FORMS_REVIEWERS_URL = FORMS_URL.concat('/reviewers');