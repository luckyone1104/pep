import { FC } from 'react';
import { useAddFieldModalContext } from '../hooks/useAddFieldModalContext';
import { ModuleName } from '../../../../const';
import { Button } from '@mui/material';
import { ListHeader } from '../../../../components/ListHeader';

export const FieldsListHeader: FC = () => {
	const { handleOpen } = useAddFieldModalContext();

	return (
		<ListHeader
			listTitle={ModuleName.Fields}
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
