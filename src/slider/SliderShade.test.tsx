import {render, screen} from '@testing-library/react';
import {testForAccessibility} from '../jest/testForAccessibility';
import SliderShade from './SliderShade';

describe('SliderShade.tsx', () => {
	test('Render', async () => {
		render(<SliderShade shade="#009"/>);
		expect(screen.getByText('#009')).toBeInTheDocument();
	});
	
	testForAccessibility(<SliderShade shade="#009"/>);
});