import {act, cleanup, render, RenderOptions, screen} from '@testing-library/react';
import {testContainerForAccessibility} from '../jest';
import MoreTools from './MoreTools';

describe('MoreTools.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		render(
			<MoreTools/>
		);
		
		const linkEl = screen.getByText('More Tools');
		expect(linkEl).toBeInTheDocument();
		
		await act(() => {
			linkEl.click();
		});
		
		expect(screen.getByText(/Color Picker by Level Access/i)).toBeVisible();
	});
	
	testContainerForAccessibility(
		async (options: RenderOptions) => {
			const {container} = render(
				<MoreTools/>,
				options
			);
			
			const linkEl = screen.getByText('More Tools');
			await act(() => {
				linkEl.click();
			});
			
			return container;
		}
	);
});