import {faCircleHalfStroke, faEyeDropper} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Card, CardContent, CardHeader, Container, Link, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import {visuallyHidden} from '@mui/utils';

export default function MoreTools() {
	return (
		<Container>
			<Card>
				<CardHeader title="More Tools"/>
				<CardContent>
					<List>
						<ListItem>
							<ListItemIcon><FontAwesomeIcon icon={faEyeDropper} fixedWidth/></ListItemIcon>
							<ListItemText
								primary={<Link href="https://chrome.google.com/webstore/detail/bgfhbflmeekopanooidljpnmnljdihld" target="_blank">Color Picker by Level Access<Typography sx={visuallyHidden}> (opens in a new window)</Typography></Link>}
								secondary={<Typography>Leverage this in-browser color picker to evaluate the accessibility of your color palette.</Typography>}
							/>
						</ListItem>
						
						<ListItem>
							<ListItemIcon><FontAwesomeIcon icon={faCircleHalfStroke} fixedWidth/></ListItemIcon>
							<ListItemText
								primary={<Link href="https://color-contrast-checker.deque.com/" target="_blank">Color Palette Contrast Checker by deque<Typography sx={visuallyHidden}> (opens in a new window)</Typography></Link>}
								secondary={<Typography>Check your entire color palette for accessibility.</Typography>}
							/>
						</ListItem>
					</List>
				</CardContent>
			</Card>
		</Container>
	);
}