import {decomposeColor, recomposeColor, rgbToHex} from '@mui/material';

export const lighten = (color: string, amount: number) => {
	const colorObject = decomposeColor(color);
	
	const lightenChannel  = (v: number) => Math.min(v + amount, 255);
	colorObject.values[0] = lightenChannel(colorObject.values[0]);
	colorObject.values[1] = lightenChannel(colorObject.values[1]);
	colorObject.values[2] = lightenChannel(colorObject.values[2]);
	
	return rgbToHex(recomposeColor(colorObject));
};

export const darken = (color: string, amount: number) => {
	const colorObject = decomposeColor(color);
	
	const darkenChannel   = (v: number) => Math.max(v - amount, 0);
	colorObject.values[0] = darkenChannel(colorObject.values[0]);
	colorObject.values[1] = darkenChannel(colorObject.values[1]);
	colorObject.values[2] = darkenChannel(colorObject.values[2]);
	
	return rgbToHex(recomposeColor(colorObject));
};