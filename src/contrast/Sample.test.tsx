import {cleanup, render, screen} from '@testing-library/react';
import {testForAccessibility} from '../jest';
import Sample from './Sample';

describe('Sample.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		render(<Sample size={36} weight="bold" color="#000"/>);
		expect(screen.getByText('36pt bold')).toBeInTheDocument();
	});
	
	testForAccessibility(<Sample size={36} weight="bold" color="#000"/>);
});