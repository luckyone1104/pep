import Alert from '@mui/material/Alert';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { isUndefined } from '../../utils';

type ErrorBoundaryProps = {
	message?: string;
	children: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	public state: ErrorBoundaryState = {
		hasError: false,
	};

	public static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(error, errorInfo);
	}

	render() {
		const message = this.props.message;

		if (this.state.hasError) {
			return (
				<Alert severity="error">
					{message && message}
					{isUndefined(message) && 'Oops.. something went wrong!'}
				</Alert>
			);
		}

		return this.props.children;
	}
}
