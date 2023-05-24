import {render, screen} from '@testing-library/react';
import {resizeScreenSize} from '../jest';
import {testForAccessibility} from '../jest/testForAccessibility';
import Header from './Header';

describe('Header.tsx', () => {
	test('Render', async () => {
		render(<Header/>);
		expect(screen.getByText('a11y color tools')).toBeInTheDocument();
	});
	
	test('Render small', async () => {
		resizeScreenSize(320);
		
		render(<Header/>);
		expect(screen.getByText('a11y color tools')).toBeInTheDocument();
	});
	
	testForAccessibility(<Header/>);
});