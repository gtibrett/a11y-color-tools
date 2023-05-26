import {render, screen} from '@testing-library/react';
import {ReduxContainer, testForAccessibility} from '../jest';
import Home from './Home';

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

describe('Home.tsx', () => {
	test('Render', async () => {
		render(
			<ReduxContainer>
				<Home/>
			</ReduxContainer>
		);
		expect(screen.getByText('Foreground')).toBeInTheDocument();
		expect(screen.getByText('Background')).toBeInTheDocument();
		expect(screen.getByText('Contrast')).toBeInTheDocument();
	});
	
	testForAccessibility(
		<ReduxContainer>
			<Home/>
		</ReduxContainer>
	);
});