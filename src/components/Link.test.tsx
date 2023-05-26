import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {testForAccessibility} from '../jest';
import Link from './Link';

describe('Link.tsx', () => {
	test('Plain React Router Link: render', async () => {
		render(<>
			<BrowserRouter>
				<Link to="/">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	test('Plain React Router Link: primary color', async () => {
		render(<>
			<BrowserRouter>
				<Link to="/" color="primary">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	test('Plain React Router Link: inherit color', async () => {
		render(<>
			<BrowserRouter>
				<Link to="/" color="inherit">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	describe('Plain React Router Link: a11y', () => {
		testForAccessibility(
			<BrowserRouter>
				<Link to="/">Home</Link>
			</BrowserRouter>
		);
	});
	
	test('Plain Mui Link: render', async () => {
		render(<>
			<BrowserRouter>
				<Link href="/">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	describe('Plain Mui Link: a11y', () => {
		testForAccessibility(
			<BrowserRouter>
				<Link href="/">Home</Link>
			</BrowserRouter>
		);
	});
	
	test('External React Router Link: render', async () => {
		render(<>
			<BrowserRouter>
				<Link to="/" target="_blank">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	describe('External React Router Link: a11y', () => {
		testForAccessibility(
			<BrowserRouter>
				<Link to="/" target="_blank">Home</Link>
			</BrowserRouter>
		);
	});
	
	test('External Mui Link: render', async () => {
		render(<>
			<BrowserRouter>
				<Link href="/" target="_blank">Home</Link>
			</BrowserRouter>
		</>);
		
		expect(screen.getByText(/home/i)).toBeInTheDocument();
	});
	
	describe('External Mui Link: a11y', () => {
		testForAccessibility(
			<BrowserRouter>
				<Link href="/" target="_blank">Home</Link>
			</BrowserRouter>
		);
	});
});