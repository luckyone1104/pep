import { lazy } from 'react';
import { ListName } from './listName';

export const listPages = [
	{
		name: ListName.Projects,
		path: '/projects/list',
		component: lazy(() => import('src/pages/projects/list')),
	},
	{
		name: ListName.Teams,
		path: '/teams/list',
		component: lazy(() => import('src/pages/teams/list')),
	},
	{
		name: ListName.Users,
		path: '/users/list',
		component: lazy(() => import('src/pages/users/list')),
	},
	{
		name: ListName.Fields,
		path: '/fields/list',
		component: lazy(() => import('src/pages/fields/list')),
	},
	{
		name: ListName.DeepLinks,
		path: '/deeplinks/list',
		component: lazy(() => import('src/pages/deeplinks/list')),
	},
	{
		name: ListName.Documents,
		path: '/documents/list',
		component: lazy(() => import('src/pages/documents/list')),
	},
	{
		name: ListName.Roles,
		path: '/roles/list',
		component: lazy(() => import('src/pages/roles/list')),
	},
	{
		name: ListName.FieldGroups,
		path: '/fieldgroups/list',
		component: lazy(() => import('src/pages/fieldgroups/list')),
	},
	{
		name: ListName.Surveys,
		path: '/surveys/list',
		component: lazy(() => import('src/pages/surveys/list')),
	},
	{
		name: ListName.Forms,
		path: '/forms/list',
		component: lazy(() => import('src/pages/forms/list')),
	},
	{
		name: ListName.FormTemplates,
		path: '/formtemplates/list',
		component: lazy(() => import('src/pages/formtemplates/list')),
	},
];
