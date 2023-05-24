import {act, cleanup, render, RenderOptions, screen} from '@testing-library/react';
import {testContainerForAccessibility} from '../jest/testForAccessibility';
import About from './About';

describe('About.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		render(
			<About/>
		);
		
		const linkEl = screen.getByText('About');
		expect(linkEl).toBeInTheDocument();
		
		await act(() => {
			linkEl.click();
		});
		
		expect(screen.getByText(/the ultimate tool for analyzing color contrast/i)).toBeVisible();
	});
	
	testContainerForAccessibility(
		async (options: RenderOptions) => {
			const {container} = render(
				<About/>,
				options
			);
			
			const linkEl = screen.getByText('About');
			await act(() => {
				linkEl.click();
			});
			
			return container;
		}
	);
});