import {usePageTitle} from '@gtibrett/mui-additions';
import {Container, Grid} from '@mui/material';
import React from 'react';
import ContrastCard from '../contrast/ContrastCard';
import {useColorVariant} from '../redux/store';
import ColorSlider from '../slider/ColorSlider';

export default function Home() {
	usePageTitle('Home');
	
	const foreground = useColorVariant('foreground');
	const background = useColorVariant('background');
	
	return (
		<Container>
			<Grid container spacing={2} alignItems="stretch">
				<Grid item xs={12} md={6}><ColorSlider title="Foreground" variant="foreground" color={foreground}/></Grid>
				<Grid item xs={12} md={6}><ColorSlider title="Background" variant="background" color={background}/></Grid>
				<Grid item xs={12}>
					<ContrastCard foreground={foreground} background={background}/>
				</Grid>
			</Grid>
		</Container>
	);
}