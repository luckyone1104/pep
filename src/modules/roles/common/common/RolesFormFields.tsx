import React, { FC } from 'react';
import { TextBoxField } from 'src/components/adapters/TextBoxField';
import { ColumnBalancer } from '../../../../components/ColumnBalancer';
import { RolesFormField } from '../const';
import { CheckboxField } from '../../../../components/adapters/CheckboxField';

type RolesFormFieldsProps = {
	disabled?: boolean;
};

export const RolesFormFields: FC<RolesFormFieldsProps> = ({ disabled }) => {
	return (
		<ColumnBalancer>
			<TextBoxField
				fieldProps={{
					name: RolesFormField.Title,
				}}
				label="Title"
				disabled={disabled}
			/>
			<CheckboxField
				fieldProps={{
					name: RolesFormField.IsPrimary,
				}}
				label="Is primary"
				disabled={disabled}
			/>
		</ColumnBalancer>
	);
};
