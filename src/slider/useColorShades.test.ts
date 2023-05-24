import useColorShades from './useColorShades';

describe('useColorShades.ts', () => {
	test('blue', async () => {
		const blues = useColorShades('#1e88e5');
		expect(blues.length).toBe(3);
		
		expect(blues[0]).toBe('#1983e0');
		expect(blues[1]).toBe('#1e88e5');
		expect(blues[2]).toBe('#238dea');
	});
	
	test('white', async () => {
		const blues = useColorShades('#ffffff');
		expect(blues.length).toBe(3);
		
		expect(blues[0]).toBe('#fafafa');
		expect(blues[1]).toBe('#ffffff');
		expect(blues[2]).toBe('#ffffff');
	});
});