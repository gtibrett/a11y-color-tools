import {faBomb} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Card, CardContent, CardHeader, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import {useRouteError} from 'react-router-dom';

export default function ErrorPage() {
	const error: any = useRouteError();
	console.error(error);
	
	return (
		<Container sx={{p: 4}}>
			<Card>
				<CardHeader titleTypographyProps={{component: 'h1', variant: 'h2'}} title="Oops, something bad happened" sx={{'--fa-animation-duration': '10s'}} avatar={<FontAwesomeIcon icon={faBomb} beat size="2x"/>}/>
				<CardContent>
					<Grid container justifyContent="space-evenly" alignItems="center" sx={{my: 4}}>
						<Grid item><Typography variant="h2" component="p">{error?.error?.message}</Typography></Grid>
					</Grid>
				</CardContent>
			</Card>
		</Container>
	);
}