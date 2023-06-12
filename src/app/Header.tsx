import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from '@gtibrett/mui-additions';
import {AppBar, Container, Grid, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import {getFontAwesomeIcon} from '../components';
import Navigation from './Navigation';

const faPalette = getFontAwesomeIcon('faPalette');

export default function Header() {
	const theme   = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
	
	return (
		<>
			<AppBar component="header" position="fixed" sx={{top: 0, borderBottom: `1px solid ${theme.palette.divider}`}} color="inherit" elevation={0}>
				<Container>
					<Toolbar>
						<Grid container spacing={2} alignItems="center">
							<Grid item>
								<Link to="/" sx={{display: 'inline-block'}}>
									<FontAwesomeIcon icon={faPalette} size="2x" style={{transform: 'rotate(-40deg)', verticalAlign: isSmall ? -8 : undefined}}/>
									<Typography variant="h1" sx={{fontFamily: 'Fira Sans', ml: {xs: 1, sm: 2}, fontSize: {xs: 21, sm: 32}, display: 'inline-block'}}>a11y color tools</Typography>
								</Link>
							</Grid>
							<Grid item xs/>
							<Navigation/>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar sx={{height: isSmall ? 130 : 90}}/>
		</>
	);
}