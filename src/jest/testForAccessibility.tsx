import {ThemeProvider} from '@mui/material';
import {cleanup, render, renderHook, RenderOptions} from '@testing-library/react';
import axe, {AxeResults} from 'axe-core';
import {PropsWithChildren, ReactElement} from 'react';
import {useAppTheme} from '../components/Theme';
import {resizeScreenSize} from './mediaQueryMocks';

type TestMode = 'test' | 'log';

const LightModeWrapper = ({children}: PropsWithChildren) => {
	const theme = useAppTheme('light');
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const DarkModeWrapper = ({children}: PropsWithChildren) => {
	const theme = useAppTheme('dark');
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const getBreakpoints = (): number[] => {
	const {result: theme} = renderHook(() => useAppTheme());
	return Object.values(theme.current.breakpoints.values);
};

const configureAxe = () => {
	beforeEach(() => {
		axe.configure({
			rules: [
				{
					id: 'wcag2a'
				}, {
					id: 'wcag2aa'
				}
			]
		});
	});
};

const testAssertions = (mode: TestMode, results: AxeResults) => {
	switch (mode) {
		case 'test':
			expect(results.violations.length).toBe(0);
			break;
		case 'log':
			results.violations.forEach(({nodes, ...violation}) => {
				console.warn('------------------------------');
				console.log(violation);
				console.log(nodes);
				console.warn('------------------------------');
			});
			expect(results.violations.length).toBeGreaterThanOrEqual(0);
			break;
	}
};

export function testForAccessibility(content: ReactElement, mode: TestMode = 'test') {
	const breakpoints = getBreakpoints();
	configureAxe();
	
	breakpoints.forEach((size) => {
		test(`a11y check: ${size}px wide (light mode)`, async () => {
			resizeScreenSize(size);
			
			const {container} = render(content, {wrapper: LightModeWrapper});
			const results     = await axe.run(container);
			
			testAssertions(mode, results);
		});
		
		test(`a11y check: ${size}px wide (dark mode)`, async () => {
			resizeScreenSize(size);
			
			const {container} = render(content, {wrapper: DarkModeWrapper});
			const results     = await axe.run(container);
			
			testAssertions(mode, results);
		});
	});
}

type ContainerFactory<T extends Element | DocumentFragment = HTMLElement> = (options: RenderOptions) => Promise<T>;

export function testContainerForAccessibility(containerFactory: ContainerFactory, mode: TestMode = 'test') {
	const breakpoints = getBreakpoints();
	configureAxe();
	
	afterEach(cleanup);
	
	breakpoints.forEach((size) => {
		test(`a11y check: ${size}px wide (light mode)`, async () => {
			resizeScreenSize(size);
			
			const container = await containerFactory({wrapper: LightModeWrapper});
			const results   = await axe.run(container);
			
			testAssertions(mode, results);
		});
		
		test(`a11y check: ${size}px wide (dark mode)`, async () => {
			resizeScreenSize(size);
			
			const container = await containerFactory({wrapper: DarkModeWrapper});
			const results   = await axe.run(container);
			
			testAssertions(mode, results);
		});
	});
}