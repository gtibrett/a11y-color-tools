import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AppBar, Container, Grid, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import getFontAwesomeIcon from '../components/getFontAwesomeIcon';
import About from '../dialogs/About';
import MoreTools from '../dialogs/MoreTools';

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
								<FontAwesomeIcon icon={faPalette} size="2x" style={{transform: 'rotate(-40deg)'}}/>
								<Typography variant="h1" sx={{fontFamily: 'Fira Sans', ml: 2, fontSize: 32, display: 'inline-block'}}>a11y color tools</Typography>
							</Grid>
							<Grid item xs/>
							<Grid item><About/></Grid>
							<Grid item><MoreTools/></Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar sx={{height: isSmall ? 130 : 90}}/>
		</>
	);
}