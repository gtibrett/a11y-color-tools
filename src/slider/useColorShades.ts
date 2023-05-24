import {darken, lighten} from './utils';

export default function useColorShades(color: string): string[] {
	return [-1, 0, 1].map(offset => (offset < 0 ? darken : lighten)(color, (Math.abs(offset * 5))));
}