import {Card, CardContent, SxProps, Typography, useTheme} from '@mui/material';
import {visuallyHidden} from '@mui/utils';
import useGetContrastingColor from './useGetContrastingColor';

type SliderShadeProps = {
	shade: string;
}
export default function SliderShade({shade}: SliderShadeProps) {
	const theme               = useTheme();
	const getContrastingColor = useGetContrastingColor();
	
	const sx: SxProps = {
		width:           100,
		height:          100,
		backgroundColor: shade,
		color:           getContrastingColor(shade),
		border:          `1px solid ${theme.palette.primary.main}`,
		borderRadius:    2,
		boxShadow:       `inset 0 0 0 2px ${theme.palette.background.paper}`
	};
	
	return (
		<Card variant="outlined" sx={sx}>
			<CardContent sx={{mt: 2.5, textAlign: 'center'}}>
				<Typography sx={visuallyHidden}>{shade}</Typography>
			</CardContent>
		</Card>
	);
}