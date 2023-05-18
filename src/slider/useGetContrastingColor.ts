import {getLuminance, useTheme} from '@mui/material';

export default function useGetContrastingColor() {
	const theme = useTheme();
	
	return (color: string) => getLuminance(color) <= .5 ? theme.palette.common.white : theme.palette.common.black;
}
