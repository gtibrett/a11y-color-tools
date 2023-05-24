export default function getFontAwesomeIcon(icon: string) {
	try {
		const {[icon]: proIcon} = require(`@fortawesome/pro-light-svg-icons`);
		return proIcon;
	} catch (e) {
		// Pro icons not available
	}
	
	let {[icon]: freeIcon} = require(`@fortawesome/pro-light-svg-icons`);
	
	return freeIcon;
}