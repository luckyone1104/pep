import React, { FC } from 'react';
import { ListHeader } from '../../../../components/ListHeader';
import { ModuleName } from '../../../../const';

export const FormsHeader: FC = () => {
	return (
		<ListHeader listTitle={ModuleName.Forms} />
	);
};
