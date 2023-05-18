import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {ColorVariant} from '../types';

export type ColorState = {
	foreground: string;
	background: string;
};

export const colorsSlice = createSlice({
	name:         'colors',
	initialState: {
		foreground: '#000000',
		background: '#FFFFFF'
	},
	reducers:     {
		foreground: (state, action: PayloadAction<string>) => {
			const {payload: foreground} = action;
			state.foreground            = foreground;
		},
		background: (state, action: PayloadAction<string>) => {
			const {payload: background} = action;
			state.background            = background;
		}
	}
});

export const useSetByVariant = () => {
	const dispatch = useDispatch();
	
	return (variant: ColorVariant, color: string) => {
		switch (variant) {
			case 'foreground':
				dispatch(foreground(color));
				break;
			
			case 'background':
				dispatch(background(color));
				break;
			
			default:
				// bad save
				console.error('unknown variant');
		}
	};
};

export const {foreground, background} = colorsSlice.actions;
export default colorsSlice.reducer;