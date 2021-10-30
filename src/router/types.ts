import { LazyExoticComponent, FC } from 'react';

export type Route = {
	path: string;
	component: LazyExoticComponent<FC>;
}