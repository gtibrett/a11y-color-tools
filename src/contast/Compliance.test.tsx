import {cleanup, render, screen} from '@testing-library/react';
import {testForAccessibility} from '../jest/testForAccessibility';
import Compliance from './Compliance';
import {fontSamples} from './FontSamples';

describe('Compliance.tsx', () => {
	afterEach(cleanup);
	
	describe('WCAG 2.x', () => {
		test('Render: WCAG 7:1', async () => {
			render(<Compliance ratio={7} sample={fontSamples[0]} version="2.x"/>);
			expect(screen.getByText('AAA')).toBeVisible();
		});
		
		test('Render: WCAG 4.5:1', async () => {
			render(<Compliance ratio={4.5} sample={fontSamples[0]} version="2.x"/>);
			expect(screen.getByText('AA')).toBeVisible();
		});
		
		test('Render: WCAG 3:1', async () => {
			render(<Compliance ratio={3} sample={fontSamples[0]} version="2.x"/>);
			expect(screen.getByText('AA')).toBeVisible();
		});
		
		test('Render: WCAG 2:1', async () => {
			render(<Compliance ratio={2} sample={fontSamples[0]} version="2.x"/>);
			expect(screen.getByText('Fail')).toBeVisible();
		});
		
		testForAccessibility(<Compliance ratio={7} sample={fontSamples[0]} version="2.x"/>);
		testForAccessibility(<Compliance ratio={2} sample={fontSamples[0]} version="2.x"/>);
	});
	
	describe('WCAG Silver', () => {
		const l90 = fontSamples[5];
		const l75 = fontSamples[4];
		const l60 = fontSamples[2];
		const l45 = fontSamples[0];
		
		test('Render: APCA L90', async () => {
			render(<Compliance ratio={90} sample={l90} version="silver"/>);
			expect(screen.getByText('Pass')).toBeVisible();
		});
		
		test('Render: APCA L75', async () => {
			render(<Compliance ratio={75} sample={l75} version="silver"/>);
			expect(screen.getByText('Pass')).toBeVisible();
		});
		
		test('Render: APCA L60', async () => {
			render(<Compliance ratio={60} sample={l60} version="silver"/>);
			expect(screen.getByText('Pass')).toBeVisible();
		});
		
		test('Render: APCA L45', async () => {
			render(<Compliance ratio={45} sample={l45} version="silver"/>);
			expect(screen.getByText('Pass')).toBeVisible();
		});
		
		test('Render: APCA L30', async () => {
			render(<Compliance ratio={30} sample={l45} version="silver"/>);
			expect(screen.getByText('Fail')).toBeVisible();
		});
	});
	
});