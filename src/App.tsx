import {faBomb} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {UkraineButton} from '@gtibrett/mui-additions';
import {Box, Card, CardContent, CardHeader, Container, CssBaseline, Grid, Typography, useTheme} from '@mui/material';
import React from 'react';
import {Provider} from 'react-redux';
import {createBrowserRouter, Outlet, RouterProvider, useRouteError} from 'react-router-dom';
import ErrorBoundary from './app/ErrorBoundary';
import Header from './app/Header';
import useRoutes from './app/useRoutes';
import {ThemeProvider} from './components';
import store from './redux/store';

const InnerApp = () => {
	const theme = useTheme();
	
	return (
		<Box sx={{position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, background: theme.palette.background.default, overflow: 'auto'}}>
			<Header/>
			<main>
				<ErrorBoundary>
					<Outlet/>
				</ErrorBoundary>
				<UkraineButton/>
			</main>
			<footer/>
		</Box>
	);
};

export const ErrorPage = () => {
	const error: any = useRouteError();
	console.error(error);
	
	return (
		<Container sx={{p: 4}}>
			<Card>
				<CardHeader title="Oops, something bad happened" sx={{'--fa-animation-duration': '10s'}} avatar={<FontAwesomeIcon icon={faBomb} beat size="2x"/>}/>
				<CardContent>
					<Grid container justifyContent="space-evenly" alignItems="center" sx={{my: 4}}>
						<Grid item><Typography variant="h2">{error?.error?.message}</Typography></Grid>
					</Grid>
				</CardContent>
			</Card>
		</Container>
	);
};

export default function App() {
	const navLinks = useRoutes();
	const router   = createBrowserRouter([
		{
			path:         '/',
			element:      <InnerApp/>,
			errorElement: <ErrorPage/>,
			children:     navLinks
		}
	]);
	
	return (
		<Provider store={store}>
			<CssBaseline/>
			<ThemeProvider>
				<RouterProvider router={router}/>
			</ThemeProvider>
		</Provider>
	);
}