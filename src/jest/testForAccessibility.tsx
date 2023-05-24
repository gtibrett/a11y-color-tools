import {ThemeProvider} from '@mui/material';
import {render, renderHook} from '@testing-library/react';
import axe from 'axe-core';
import {PropsWithChildren, ReactElement} from 'react';
import {useAppTheme} from '../components/Theme';
import {resizeScreenSize} from './mediaQueryMocks';

const LightModeWrapper = ({children}: PropsWithChildren) => {
	const theme = useAppTheme('light');
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const DarkModeWrapper = ({children}: PropsWithChildren) => {
	const theme = useAppTheme('dark');
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default function testForAccessibility(content: ReactElement) {
	const {result: theme} = renderHook(() => useAppTheme());
	const breakpoints     = Object.values(theme.current.breakpoints.values);
	
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
	
	[breakpoints.pop() || 100].forEach((size) => {
		test(`a11y check: ${size}px wide (light mode)`, async () => {
			resizeScreenSize(size);
			
			const {container} = render(content, {wrapper: LightModeWrapper});
			
			const results = await axe.run(container);
			expect(results.violations.length).toBe(0);
		});
		
		test(`a11y check: ${size}px wide (dark mode)`, async () => {
			resizeScreenSize(size);
			
			const {container} = render(content, {wrapper: DarkModeWrapper});
			
			const result = await axe.run(container);
			
			const {violations = []} = result;
			
			if (violations.length > 0) {
				violations.forEach(({nodes, ...v}) => {
					console.log(v);
					console.log(nodes);
				});
			}
			expect(violations.length).toBe(0);
		});
	});
}

