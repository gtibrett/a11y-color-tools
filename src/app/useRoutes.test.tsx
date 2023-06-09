import useRoutes from './useRoutes';

jest.mock('apca-w3', () => {
	return {
		__esModule: true,
		calcAPCA:   jest.fn(() => 70)
	};
});

describe('useRoutes.tsx', () => {
	test('useRoutes', () => {
		const links = useRoutes();
		
		expect(links.length).toBe(3);
		expect(links.filter(l => !!l.label).length).toBe(2);
	});
});