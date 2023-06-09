import {render, screen} from '@testing-library/react';
import {resizeScreenSize, testForAccessibility} from '@gtibrett/mui-additions/jest';
import {getThemes} from '../jest';
import ErrorBoundary from './ErrorBoundary';

const error = jest.spyOn(console, 'error').mockImplementation(() => {
});

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

const ForcedError = ({force = true}: { force?: boolean }) => {
	if (force) {
		throw new Error('Forced Error');
	}
	
	return <>forced error</>;
};

describe('ErrorBoundary.tsx', () => {
	afterEach(() => error.mockReset());
	
	test('Render', async () => {
		resizeScreenSize(1280);
		
		render(
			<ErrorBoundary>
				<ForcedError force/>
			</ErrorBoundary>
		);
		
		expect(screen.getByText('Error: Forced Error')).toBeInTheDocument();
		expect(error).toBeCalledTimes(4);
	});
	
	testForAccessibility(
		<ErrorBoundary>
			<ForcedError force/>
		</ErrorBoundary>,
		getThemes()
	);
});