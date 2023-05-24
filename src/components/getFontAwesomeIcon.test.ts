import {faPalette} from '@fortawesome/free-solid-svg-icons';
import getFontAwesomeIcon from './getFontAwesomeIcon';

describe('getFontAwesomeIcon.test.ts', () => {
	test('free icon', async () => {
		const icon = getFontAwesomeIcon('faPalette');
		
		expect(icon.iconName).toBe(faPalette.iconName);
	});
	
	test('pro icon', async () => {
		try {
			const {faAlicorn} = require(`@fortawesome/pro-light-svg-icons`);
			const icon        = getFontAwesomeIcon('faAlicorn');
			
			expect(icon).toBe(faAlicorn);
		} catch (e) {
			console.info('Pro icons not installed');
		}
	});
	
	test('missing icon', async () => {
		const icon = getFontAwesomeIcon('missing');
		expect(icon).toBe(undefined);
	});
});