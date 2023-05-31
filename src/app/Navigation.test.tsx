import {act, cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event/index';
import {BrowserRouter} from 'react-router-dom';
import {resizeScreenSize, testForAccessibility} from '../jest';
import Header from './Header';
import Navigation from './Navigation';

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

describe('Navigation.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		resizeScreenSize(1280);
		
		render(
			<BrowserRouter>
				<Navigation/>
			</BrowserRouter>
		);
		
		expect(screen.getByText('About')).toBeInTheDocument();
		expect((await screen.findAllByRole('link')).length).toBe(2);
	});
	
	test('Render hamburger', async () => {
		resizeScreenSize(480);
		
		render(
			<BrowserRouter>
				<Navigation/>
			</BrowserRouter>
		);
		
		const hamburger = screen.getByTitle('toggle navigation menu');
		expect(hamburger).toBeInTheDocument();
		
		await act(() => {
			hamburger.closest('button')?.click();
		});
		
		const menuItems = (await screen.findAllByRole('menuitem'));
		expect(menuItems.length).toBe(2);
		expect(menuItems[0]).toBeVisible();
		
		await act(() => {
			menuItems[0].click();
		});
	});
	
	testForAccessibility(
		<BrowserRouter>
			<Header/>
		</BrowserRouter>
	);
});