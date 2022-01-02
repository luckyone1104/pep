import React, { FC } from 'react';
import { useFormTemplatesColumns } from '../hooks/useFormTemplatesColumns';
import { useFormTemplatesRows } from '../hooks/useFormTemplatesRows';
import { List } from '../../../../components/List';

export const FormTemplatesTable: FC = () => {
	const columns = useFormTemplatesColumns();
	const rows = useFormTemplatesRows();

	return <List columns={columns} rows={rows} />;
};
