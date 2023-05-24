import {getLuminance} from '@mui/material';

export default function useGetContrastingColor() {
	return (color: string) => getLuminance(color) <= .5 ? '#ffffff' : '#000000';
}