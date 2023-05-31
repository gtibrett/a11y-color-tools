import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {ReduxContainer, resizeScreenSize} from '../jest';
import Routes, {useNavLinks} from './Routes';

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

describe('Routes.tsx', () => {
	
	test('useNavLinks', () => {
		const links = useNavLinks();
		
		expect(links.length).toBe(3);
		expect(links.filter(l => !!l.label).length).toBe(2);
	});
	
	test('Render', async () => {
		resizeScreenSize(1280);
		
		render(
			<ReduxContainer>
				<BrowserRouter>
					<Routes/>
				</BrowserRouter>
			</ReduxContainer>
		);
		
		expect(screen.getByText('Foreground')).toBeInTheDocument();
	});
});