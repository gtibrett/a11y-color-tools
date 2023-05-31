import {cleanup, render, screen} from '@testing-library/react';
import {testForAccessibility} from '../jest';
import ContrastCard from './ContrastCard';

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

describe('ContrastCard.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		render(<ContrastCard foreground="#000" background="#FFFFFF"/>);
		expect((await screen.findAllByText('36pt normal')).length).toBe(2);
	});
	
	testForAccessibility(<ContrastCard foreground="#000" background="#FFFFFF"/>);
});