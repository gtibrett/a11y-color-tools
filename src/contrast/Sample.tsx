import {Typography} from '@mui/material';
import {FontSample} from './FontSamples';

type SampleProps = Pick<FontSample, 'size' | 'weight'> & {
	color: string;
}

export default function Sample({size, weight, color}: SampleProps) {
	return <Typography sx={{fontSize: size, textAlign: 'center', fontWeight: weight, color}}>{size}pt {weight}</Typography>;
}