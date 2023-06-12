import {faCircleCheck, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Chip} from '@mui/material';
import {green, red} from '@mui/material/colors';
import {useDarkMode} from '../components';
import {FontSample, Threshold} from './FontSamples';

type ComplianceProps = {
	ratio: number,
	sample: FontSample,
	version: '2.x' | 'silver'
}

export const calcCompliance = (ratio: ComplianceProps['ratio'], sample: ComplianceProps['sample'], version: ComplianceProps['version']): Threshold => {
	const match = {
		label:     'Fail',
		threshold: 0
	};
	
	const thresholds = version === '2.x' ? sample.wcagThresholds : sample.apcaThresholds;
	
	Object.entries(thresholds).forEach(([label, threshold]) => {
		if (ratio >= threshold && threshold > match.threshold) {
			match.label     = label;
			match.threshold = threshold;
		}
	});
	
	return match.label as Threshold;
};

const ComplianceIcon = ({label}: { label: Threshold }) => {
	const darkMode  = useDarkMode();
	const passColor = green[darkMode ? 200 : 800];
	const failColor = red[darkMode ? 200 : 800];
	
	switch (label) {
		case 'AAA':
		case 'AA':
		case 'Pass':
			return <FontAwesomeIcon icon={faCircleCheck} color={passColor}/>;
		case 'Fail':
			return <FontAwesomeIcon icon={faCircleExclamation} color={failColor}/>;
	}
};

export default function Compliance({ratio, sample, version}: ComplianceProps) {
	const label = calcCompliance(ratio, sample, version);
	
	return (
		<Chip variant="outlined" size="small" label={label} icon={<ComplianceIcon label={label}/>}/>
	);
}