import {darken, lighten} from './utils';

describe('utils.ts', () => {
	test('lighten', async () => {
		const gray = lighten('#000000', 16);
		expect(gray).toBe('#101010');
	});
	
	test('darken', async () => {
		const gray = darken('#FFFFFF', 16);
		expect(gray).toBe('#efefef');
	});
});