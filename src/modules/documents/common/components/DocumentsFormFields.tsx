import React, { FC } from 'react';
import { SelectField } from 'src/components/adapters/SelectField';
import { ColumnBalancer } from 'src/components/ColumnBalancer';
import { DocumentsFormField } from '../const';
import { useDocumentsUsers } from '../hooks/useDocumentsUsers';
import { ErrorMessage } from '../../../../const/errors';
import { useDocumentsTypes } from '../hooks/useDocumentsTypes';
import { DatePickerField } from '../../../../components/adapters/DatePickerField';

type DocumentsFormFieldsProps = {
	disabled?: boolean;
};

export const DocumentsFormFields: FC<DocumentsFormFieldsProps> = ({
	disabled,
}) => {
	const {
		data: users,
		isLoading: isUsersQueryLoading,
		error: usersQueryError,
	} = useDocumentsUsers();
	const userIdSelectFieldError = usersQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	const {
		data: documentTypes,
		isLoading: isDocumentTypesQueryLoading,
		error: documentTypesQueryError,
	} = useDocumentsTypes();
	const documentTypeIdSelectFieldError = documentTypesQueryError
		? ErrorMessage.CouldNotLoadItems
		: null;

	return (
		<ColumnBalancer>
			<SelectField
				items={users}
				fieldProps={{
					name: DocumentsFormField.UserId,
				}}
				label="User"
				disabled={disabled}
				isLoading={isUsersQueryLoading}
				customError={userIdSelectFieldError}
			/>
			<SelectField
				items={documentTypes}
				fieldProps={{
					name: DocumentsFormField.TypeId,
				}}
				label="Type"
				disabled={disabled}
				isLoading={isDocumentTypesQueryLoading}
				customError={documentTypeIdSelectFieldError}
			/>
			<DatePickerField
				fieldProps={{
					name: DocumentsFormField.ValidToDate,
				}}
				label="Valid to"
			/>
		</ColumnBalancer>
	);
};
