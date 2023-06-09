import {UkraineButton} from '@gtibrett/mui-additions';
import {Box, CssBaseline, useTheme} from '@mui/material';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Outlet, Route, Routes, useLocation} from 'react-router-dom';
import ErrorBoundary from './app/ErrorBoundary';
import Header from './app/Header';
import useRoutes from './app/useRoutes';
import {ThemeProvider} from './components';
import store from './redux/store';

const InnerApp = () => {
	const theme    = useTheme();
	const location = useLocation();
	
	console.info({location});
	
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

export default function App() {
	const navLinks = useRoutes();
	
	return (
		<Provider store={store}>
			<CssBaseline/>
			<ThemeProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<InnerApp/>}>
							{navLinks.map(({label, ...route}) => <Route {...route}/>)}
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}