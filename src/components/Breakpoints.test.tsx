import {act, render, screen} from '@testing-library/react';
import {testForAccessibility} from '../jest';
import Breakpoints from './Breakpoints';

describe('Breakpoints.tsx', () => {
	test('Render', async () => {
		const {container} = render(<Breakpoints/>);
		expect(screen.getByTitle('toggle breakpoints')).toBeInTheDocument();
		
		const button = screen.getByRole('button');
		await act(() => {
			button.click();
		});
		
		const breakpoints = container.ownerDocument.getElementById('breakpoints');
		expect(breakpoints).toBeInTheDocument();
	});
	
	testForAccessibility(<Breakpoints/>);
});