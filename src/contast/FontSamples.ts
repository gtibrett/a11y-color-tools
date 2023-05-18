import {CSSObject} from '@mui/material';

export type Threshold = 'AAA' | 'AA' | 'Pass' | 'Fail'

export type FontSample = {
	size: CSSObject['fontSize']
	weight: CSSObject['fontWeight'];
	wcagThresholds: {
		[key in Threshold]?: number
	},
	apcaThresholds: {
		[key in Threshold]?: number
	}
}

export const fontSamples: FontSample[] = [
	{
		size:           36,
		weight:         'normal',
		wcagThresholds: {
			'AAA': 7,
			'AA':  3
		},
		apcaThresholds: {
			'Pass': 45
		}
	},
	{
		size:           24,
		weight:         'bold',
		wcagThresholds: {
			'AAA': 7,
			'AA':  3
		},
		apcaThresholds: {
			'Pass': 45
		}
	},
	{
		size:           24,
		weight:         'normal',
		wcagThresholds: {
			'AAA': 7,
			'AA':  3
		},
		apcaThresholds: {
			'Pass': 60
		}
	},
	{
		size:           16,
		weight:         'bold',
		wcagThresholds: {
			'AAA': 7,
			'AA':  3
		},
		apcaThresholds: {
			'Pass': 60
		}
	},
	{
		size:           18,
		weight:         'normal',
		wcagThresholds: {
			'AAA': 7,
			'AA':  3
		},
		apcaThresholds: {
			'Pass': 75,
		}
	},
	{
		size:           14,
		weight:         'bold',
		wcagThresholds: {
			'AAA': 7,
			'AA':  3
		},
		apcaThresholds: {
			'Pass': 90
		}
	},
	{
		size:           14,
		weight:         'normal',
		wcagThresholds: {
			'AAA': 7,
			'AA':  4.5
		},
		apcaThresholds: {
			'Pass': 90
		}
	}
];