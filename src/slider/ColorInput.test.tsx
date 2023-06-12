import {testForAccessibility} from '@gtibrett/mui-additions/jest';
import {act, cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {UserEvent} from '@testing-library/user-event/setup/setup';
import React from 'react';
import {getThemes, ReduxContainer} from '../jest';
import ColorInput from './ColorInput';

describe('ColorInput.tsx', () => {
	let user: UserEvent | undefined;
	
	afterEach(cleanup);
	beforeEach(() => {
		user = userEvent.setup();
	});
	
	test('Render', async () => {
		render(
			<ReduxContainer>
				<ColorInput variant="foreground"/>
			</ReduxContainer>
		);
		expect(screen.getByLabelText(/foreground Color/i)).toBeInTheDocument();
	});
	
	test('Interact', async () => {
		const {container} = render(
			<ReduxContainer>
				<ColorInput variant="foreground"/>
			</ReduxContainer>
		);
		
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
		
		await act(async () => {
			if (user) {
				input.focus();
				await user.keyboard('[backspace][backspace][backspace][backspace][backspace][backspace][backspace]'); // delete all selected
				await user.keyboard('#123'); // allowed keys
				await user.keyboard('xyz!@'); // ignored keys
				await user.keyboard('{Alt>}a{/Alt}'); // ignored hotkey
				await user.keyboard('{Enter}'); // submit form
			} else {
				throw new Error('UserEvent not initialized');
			}
		});
		
		expect(container.querySelector('input')?.value).toBe('#123');
	});
	
	testForAccessibility(
		<ReduxContainer>
			<ColorInput variant="foreground"/>
		</ReduxContainer>,
		getThemes()
	);
});