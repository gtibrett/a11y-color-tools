import {resizeScreenSize, testForAccessibility} from '@gtibrett/mui-additions/jest';
import {act, cleanup, render, screen} from '@testing-library/react';
import {getThemes, ReduxContainer} from '../jest';
import ColorSlider from './ColorSlider';

describe('ColorSlider.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		render(
			<ReduxContainer>
				<ColorSlider color="#000" variant="foreground" title="Foreground"/>
			</ReduxContainer>
		);
		
		expect(screen.getByText('Foreground')).toBeInTheDocument();
	});
	
	test('Render Small', async () => {
		resizeScreenSize(321);
		
		render(
			<ReduxContainer>
				<ColorSlider color="#000" variant="foreground" title="Foreground"/>
			</ReduxContainer>
		);
		
		expect(screen.getByText('Foreground')).toBeInTheDocument();
	});
	
	test('Lighten', async () => {
		resizeScreenSize(1024);
		
		render(
			<ReduxContainer>
				<ColorSlider color="#000" variant="foreground" title="Foreground"/>
			</ReduxContainer>
		);
		
		const button = screen.getByText(/Lighten/i);
		await act(() => button.click());
		
		const textboxes = await screen.findAllByRole('textbox');
		expect(textboxes.length).toBe(1);
		// @ts-ignore
		expect(textboxes[0].value).toBe('#050505');
	});
	
	test('Darken', async () => {
		resizeScreenSize(1024);
		
		render(
			<ReduxContainer>
				<ColorSlider color="#FFF" variant="background" title="Background"/>
			</ReduxContainer>
		);
		
		const button = screen.getByText(/Darken/i);
		await act(() => button.click());
		
		const textboxes = await screen.findAllByRole('textbox');
		expect(textboxes.length).toBe(1);
		// @ts-ignore
		expect(textboxes[0].value).toBe('#fafafa');
	});
	
	testForAccessibility(<ReduxContainer><ColorSlider color="#000" variant="background" title="Background"/></ReduxContainer>, getThemes());
});