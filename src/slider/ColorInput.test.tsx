import {act, cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {UserEvent} from '@testing-library/user-event/setup/setup';
import React from 'react';
import {testForAccessibility} from '../jest/testForAccessibility';
import ColorInput from './ColorInput';

jest.mock('react-redux');

describe('ColorInput.tsx', () => {
	let user: UserEvent | undefined;
	
	afterEach(cleanup);
	
	beforeEach(() => {
		user = userEvent.setup();
	});
	
	test('Render', async () => {
		render(<ColorInput variant="foreground"/>);
		expect(screen.getByLabelText(/foreground Color/i)).toBeInTheDocument();
	});
	
	test('Interact', async () => {
		const {container} = render(<ColorInput variant="foreground"/>);
		
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
		
		await act(async () => {
			if (user) {
				input.focus();
				await user.keyboard('[backspace][backspace][backspace][backspace]');
				await user.keyboard('#123'); // allowed keys
				await user.keyboard('xyz!@'); // ignored keys
				await user.keyboard('{Alt>}a{/Alt}'); // ignored hotkey
				
			} else {
				throw new Error('UserEvent not initialized');
			}
		});
		
		expect(container.querySelector('input')?.value).toBe('#123');
	});
	
	testForAccessibility(<ColorInput variant="foreground"/>);
});