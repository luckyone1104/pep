import React, { FC } from 'react';
import { ListHeader } from '../../../../components/ListHeader';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';
import { useAddFormTemplateModalContext } from '../hooks/useAddFormTemplateModalContext';

export const FormTemplateHeader: FC = () => {
	const { handleOpen } = useAddFormTemplateModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.FormTemplates}
			rightSide={
				<Button variant="outlined" onClick={handleOpen}>
					Add form template
				</Button>
			}
		/>
	);
};
