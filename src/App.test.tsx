import {render, screen} from '@testing-library/react';
import App from './App';
import {testForAccessibility} from './jest';

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

describe('App.tsx', () => {
	test('Render', async () => {
		render(<App/>);
		expect(screen.getByText('a11y color tools')).toBeInTheDocument();
		expect(screen.getByText('Foreground')).toBeInTheDocument();
		expect(screen.getByText('Background')).toBeInTheDocument();
		expect(screen.getByText('Contrast')).toBeInTheDocument();
	});
	
	testForAccessibility(<App/>);
});