import {resizeScreenSize, testForAccessibility} from '@gtibrett/mui-additions/jest';
import {render, screen} from '@testing-library/react';
import {getThemes} from '../jest';
import ErrorPage from './ErrorPage';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useRouteError: jest.fn(() => {
		return {
			error: {
				message: 'unexpected error'
			}
		};
	})
}));

describe('ErrorPage.tsx', () => {
	let error = jest.spyOn(console, 'error').mockImplementation((e: any) => console.log(e));
	
	beforeEach(() => {
		error = jest.spyOn(console, 'error').mockImplementation(() => null);
	});
	
	afterEach(() => {
		error.mockReset();
	});
	
	test('Render', async () => {
		resizeScreenSize(1280);
		
		render(<ErrorPage/>);
		expect(screen.getByText(/Oops, something bad happened/i)).toBeInTheDocument();
	});
	
	testForAccessibility(<ErrorPage/>, getThemes());
});