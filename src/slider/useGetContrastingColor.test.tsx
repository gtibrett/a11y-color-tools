import {Theme} from '@mui/material';
import {renderHook} from '@testing-library/react';
import {useAppTheme} from '../components/Theme';
import useGetContrastingColor from './useGetContrastingColor';

const getColorsToCheck = (): [string, string][] => {
	const {result} = renderHook<Theme, any>(() => useAppTheme());
	const palette  = result.current.palette;
	
	return [
		['#FFF', '#000000'],
		['#000', '#ffffff'],
		[palette.primary.light, '#ffffff'],
		[palette.primary.main, '#ffffff'],
		[palette.primary.dark, '#ffffff'],
		[palette.secondary.light, '#ffffff'],
		[palette.secondary.main, '#ffffff'],
		[palette.secondary.dark, '#ffffff']
	];
};

describe('useGetContrastingColor.ts', () => {
	const getContrastingColor = useGetContrastingColor();
	
	getColorsToCheck().forEach(([color, expected]) => {
		test(`Color: ${color}`, async () => {
			expect(getContrastingColor(color)).toBe(expected);
		});
	});
});