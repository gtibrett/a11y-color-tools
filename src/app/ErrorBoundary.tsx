import {faFlag} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Card, CardContent, Grid, Typography} from '@mui/material';
import React, {Component, ComponentProps, ErrorInfo, PropsWithChildren} from 'react';

type ErrorBoundaryState = {
	hasError: boolean;
	error?: Error;
}

export default class ErrorBoundary extends Component<PropsWithChildren<any>, ErrorBoundaryState> {
	constructor(props: ComponentProps<any>) {
		super(props);
		this.state = {hasError: false};
	}
	
	static getDerivedStateFromError(error: Error) {
		
		// Update state so the next render will show the fallback UI.
		return {hasError: true, error};
	}
	
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(error, errorInfo);
	}
	
	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<Card>
					<CardContent>
						<Grid container justifyContent="space-evenly" alignItems="center" sx={{my: 4}}>
							<Grid item sx={{textAlign: 'center', '--fa-animation-duration': '30s', fontSize: {xs: '25vh', md: '35vh'}}}>
								<FontAwesomeIcon icon={faFlag} beat/>
							</Grid>
							<Grid item><Typography variant="h2">Error: {this.state.error?.message}</Typography></Grid>
						</Grid>
					</CardContent>
				</Card>
			);
		}
		
		return this.props.children;
	}
}