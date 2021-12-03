import React, { FC } from 'react';
import { ListHeader } from '../../../../components/ListHeader';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';
import { useAddDocumentModalContext } from '../hooks/useAddDocumentModalContext';

export const DocumentsListHeader: FC = () => {
	const { handleOpen } = useAddDocumentModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.Documents}
			rightSide={
				<Button
					variant="outlined"
					onClick={handleOpen}
				>
					Add
				</Button>
			}
		/>
	);
};
