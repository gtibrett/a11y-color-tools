import {Box, CssBaseline, ThemeProvider, useTheme} from '@mui/material';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Header from './app/Header';
import Routes from './app/Routes';
import {useAppTheme} from './components/Theme';
import store from './redux/store';

const InnerApp = () => {
	const theme = useTheme();
	
	return (
		<Box sx={{position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, background: theme.palette.background.default, overflow: 'auto'}}>
			<Header/>
			<main>
				<Routes/>
			</main>
			<footer/>
		</Box>
	);
};

export default function App() {
	const theme = useAppTheme();
	
	return (
		<Provider store={store}>
			<CssBaseline/>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<InnerApp/>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}