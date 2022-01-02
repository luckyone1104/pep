import { BASE_API_URL } from '../../../api';

export const SURVEYS_URL = `${BASE_API_URL}/surveys`;
export const SURVEYS_STATES_URL = SURVEYS_URL.concat('/states');
export const SURVEYS_ASSIGNEES_URL = SURVEYS_URL.concat('/assignees');
export const SURVEYS_SUPERVISORS_URL = SURVEYS_URL.concat('/supervisors');
