import {render, screen} from '@testing-library/react';
import {resizeScreenSize} from '../jest';
import {testForAccessibility} from '../jest/testForAccessibility';
import Header from './Header';

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

describe('Header.tsx', () => {
	
	test('Render', async () => {
		resizeScreenSize(1280);
		
		render(
			<BrowserRouter>
				<Header/>
			</BrowserRouter>
		);
		expect(screen.getByText('a11y color tools')).toBeInTheDocument();
	});
	
	test('Render small', async () => {
		resizeScreenSize(320);
		
		render(
			<BrowserRouter>
				<Header/>
			</BrowserRouter>
		);
		expect(screen.getByText('a11y color tools')).toBeInTheDocument();
	});
	
	testForAccessibility(
		<BrowserRouter>
			<Header/>
		</BrowserRouter>
	);
});