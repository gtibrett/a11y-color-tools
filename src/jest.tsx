import {Theme} from '@mui/material';
import {renderHook} from '@testing-library/react';
import {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {useAppTheme} from './components';
import store from './redux/store';

export function ReduxContainer({children}: PropsWithChildren) {
	return <Provider store={store}>{children}</Provider>;
}

export const getThemes = (): Theme[] => {
	const {result: lightTheme} = renderHook(() => useAppTheme('light'));
	const {result: darkTheme}  = renderHook(() => useAppTheme('dark'));
	
	return [lightTheme.current, darkTheme.current];
};