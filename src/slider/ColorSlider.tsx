import {faChevronDown, faChevronLeft, faChevronRight, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Box, Button, Card, CardContent, CardHeader, CardHeaderProps, Grid, Hidden, useMediaQuery, useTheme} from '@mui/material';
import {useSetByVariant} from '../redux/colorsSlice';
import {ColorVariant} from '../types';
import ColorInput from './ColorInput';
import SliderShade from './SliderShade';
import useColorShades from './useColorShades';

type ColorSliderProps = {
	title: CardHeaderProps['title'];
	variant: ColorVariant;
	color: string;
}

export default function ColorSlider({title, variant, color}: ColorSliderProps) {
	const theme        = useTheme();
	const shades       = useColorShades(color);
	const setByVariant = useSetByVariant();
	const isSmall      = useMediaQuery(theme.breakpoints.down('sm'));
	
	const darken = () => {
		setByVariant(variant, shades[0]);
	};
	
	const lighten = () => {
		setByVariant(variant, shades[2]);
	};
	
	return (
		<Card variant="outlined">
			<CardHeader
				title={title}
				subheader={isSmall ? <Box sx={{mt: 2}}><ColorInput variant={variant}/></Box> : undefined}
				action={!isSmall ? <ColorInput variant={variant}/> : undefined}
			/>
			<CardContent>
				<Grid container spacing={2} alignItems="center" justifyContent="space-evenly">
					<Hidden smDown>
						<Grid item>
							<Button onClick={darken} variant="outlined" startIcon={<FontAwesomeIcon icon={faChevronLeft}/>}>
								Darken
							</Button>
						</Grid>
					</Hidden>
					<Grid item>
						<SliderShade shade={color}/>
					</Grid>
					<Grid item>
						<Button
							onClick={lighten} variant="outlined"
							startIcon={isSmall ? <FontAwesomeIcon icon={faChevronUp}/> : undefined}
							endIcon={!isSmall ? <FontAwesomeIcon icon={faChevronRight}/> : undefined}
						>
							Lighten
						</Button>
						<Hidden smUp>
							<br/>
							<Button sx={{mt: 1}} onClick={darken} variant="outlined" startIcon={<FontAwesomeIcon icon={faChevronDown}/>}>
								Darken
							</Button>
						</Hidden>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}