import {act, cleanup, render, RenderOptions, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testContainerForAccessibility} from '@gtibrett/mui-additions';
import Dialog from './Dialog';

describe('Dialog.tsx', () => {
	afterEach(cleanup);
	
	test('Render', async () => {
		render(
			<Dialog href="#test" linkLabel="test link" title="Dialog Title">
				dialog content
			</Dialog>
		);
		
		const linkEl = screen.getByText('test link');
		expect(linkEl).toBeInTheDocument();
		
		await act(() => {
			linkEl.click();
		});
		
		expect(screen.getByText('dialog content')).toBeVisible();
		
		const closeEl = screen.getByTitle('close dialog');
		expect(closeEl).toBeInTheDocument();
		
		await act(() => {
			closeEl.click();
		});
		
		expect(screen.getByText('dialog content')).not.toBeVisible();
	});
	
	test('Close with Escape key', async () => {
		const user = userEvent.setup();
		
		render(
			<Dialog href="#test" linkLabel="test link" title="Dialog Title">
				dialog content
			</Dialog>
		);
		
		const linkEl = screen.getByText('test link');
		expect(linkEl).toBeInTheDocument();
		
		await act(() => {
			linkEl.click();
		});
		
		expect(screen.getByText('dialog content')).toBeVisible();
		
		await user.keyboard('[Escape]');
		
		expect(screen.getByText('dialog content')).not.toBeVisible();
	});
	
	testContainerForAccessibility(
		async (options: RenderOptions) => {
			const {container} = render(
				<Dialog href="#test" linkLabel="test link" title="Dialog Title">
					dialog content
				</Dialog>,
				options
			);
			
			const linkEl = screen.getByText('test link');
			await act(() => {
				linkEl.click();
			});
			
			return container;
		}
	);
});