import {Button, capitalize, Grid, TextField, Typography} from '@mui/material';
import {visuallyHidden} from '@mui/utils';
import {ChangeEvent, KeyboardEventHandler, MouseEventHandler, useEffect, useState} from 'react';
import {useSetByVariant} from '../redux/colorsSlice';
import {useColorVariant} from '../redux/store';
import {ColorVariant} from '../types';

const ALLOWED_CHARACTERS = ['#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'BACKSPACE', 'TAB', 'ENTER', 'SHIFT', 'META'];

type ColorInputProps = {
	variant: ColorVariant
};

const handleKeydown: KeyboardEventHandler<HTMLDivElement> = (ev) => {
	if (ev.altKey || ev.ctrlKey || ev.metaKey) {
		return;
	}
	
	if (!ALLOWED_CHARACTERS.includes(ev.key.toUpperCase())) {
		console.log(ev.key);
		ev.preventDefault();
	}
};

export default function ColorInput({variant}: ColorInputProps) {
	const color             = useColorVariant(variant);
	const [value, setValue] = useState(color);
	const setByVariant      = useSetByVariant();
	
	useEffect(() => {
		setValue(color);
	}, [color]);
	
	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setValue(ev.target.value);
	};
	
	const handleSave: MouseEventHandler<HTMLButtonElement> = () => setByVariant(variant, value);
	
	return (
		<Grid container spacing={1}>
			<Grid item>
				<TextField
					label={`${capitalize(variant)} Color`}
					variant="outlined"
					size="small"
					color="secondary"
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeydown}
					inputProps={{
						maxLength: 7
					}}
				/>
			</Grid>
			<Grid item>
				<Button color="secondary" variant="contained" onClick={handleSave}>
					Set <Typography sx={visuallyHidden}>{variant}</Typography>
				</Button>
			</Grid>
		</Grid>
	);
}