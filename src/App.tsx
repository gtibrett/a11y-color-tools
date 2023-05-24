import {Box, Container, CssBaseline, Grid, ThemeProvider, useTheme} from '@mui/material';
import React from 'react';
import {Provider} from 'react-redux';
import Header from './app/Header';
import {useAppTheme} from './components/Theme';
import ContrastCard from './contast/ContrastCard';
import store, {useColorVariant} from './redux/store';
import ColorSlider from './slider/ColorSlider';

const InnerApp = () => {
	const theme      = useTheme();
	const foreground = useColorVariant('foreground');
	const background = useColorVariant('background');
	
	return (
		<Box sx={{position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, background: theme.palette.background.default, overflow: 'auto'}}>
			<Header/>
			<main>
				<Container>
					<Grid container spacing={2} alignItems="stretch">
						<Grid item xs={12} md={6}><ColorSlider title="Foreground" variant="foreground" color={foreground}/></Grid>
						<Grid item xs={12} md={6}><ColorSlider title="Background" variant="background" color={background}/></Grid>
						<Grid item xs={12}>
							<ContrastCard foreground={foreground} background={background}/>
						</Grid>
					</Grid>
				</Container>
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
				<InnerApp/>
			</ThemeProvider>
		</Provider>
	);
}