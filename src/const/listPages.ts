import { lazy } from 'react';
import { ListName } from './listName';

export const listPages = [
	{
		name: ListName.Projects,
		path: '/projects/list',
		component: lazy(() => import('src/modules/projects/list')),
	},
	{
		name: ListName.Teams,
		path: '/teams/list',
		component: lazy(() => import('src/modules/teams/list')),
	},
	{
		name: ListName.Users,
		path: '/users/list',
		component: lazy(() => import('src/modules/users/list')),
	},
	{
		name: ListName.Fields,
		path: '/fields/list',
		component: lazy(() => import('src/modules/fields/list')),
	},
	{
		name: ListName.DeepLinks,
		path: '/deeplinks/list',
		component: lazy(() => import('src/modules/deeplinks/list')),
	},
	{
		name: ListName.Documents,
		path: '/documents/list',
		component: lazy(() => import('src/modules/documents/list')),
	},
	{
		name: ListName.Roles,
		path: '/roles/list',
		component: lazy(() => import('src/modules/roles/list')),
	},
	{
		name: ListName.FieldGroups,
		path: '/fieldgroups/list',
		component: lazy(() => import('src/modules/fieldgroups/list')),
	},
	{
		name: ListName.Surveys,
		path: '/surveys/list',
		component: lazy(() => import('src/modules/surveys/list')),
	},
	{
		name: ListName.Forms,
		path: '/forms/list',
		component: lazy(() => import('src/modules/forms/list')),
	},
	{
		name: ListName.FormTemplates,
		path: '/formtemplates/list',
		component: lazy(() => import('src/modules/formtemplates/list')),
	},
];
