import {configureStore} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {ColorVariant} from '../types';
import colorsReducer from './colorsSlice';

const store = configureStore({
	reducer: {
		colors: colorsReducer
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useColorVariant = (variant: ColorVariant) => useSelector((state: RootState) => state.colors[variant]);

export default store;