import { CustomObject } from '../../../types';
import { AddFormTemplateMutationData } from './types';
import { post } from '../../../api';
import { FORM_TEMPLATES_URL } from '../common/const';

export const postFormTemplate = (data: AddFormTemplateMutationData) => {
	return post<CustomObject, AddFormTemplateMutationData>(FORM_TEMPLATES_URL, data);
};
