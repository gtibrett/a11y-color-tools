import {darken, lighten, rgbToHex} from '@mui/material';

export default function useColorShades(color: string): string[] {
	return [-1, 0, 1].map(offset => rgbToHex((offset < 0 ? darken : lighten)(color, (Math.abs(offset * .1)))));
}