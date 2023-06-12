import {usePageTitle} from '@gtibrett/mui-additions';
import {Card, CardContent, CardHeader, Container, Typography} from '@mui/material';

export default function About() {
	usePageTitle('About');
	
	return (
		<Container>
			<Card>
				<CardHeader title="About"/>
				<CardContent>
					<Typography variant="body1" paragraph>Introducing <strong>a11y color tools</strong>, the ultimate tool for analyzing color contrast and ensuring compliance with WCAG 2.x and Silver Accessibility standards. This nifty little app takes the guesswork out of achieving optimal color combinations.</Typography>
					<Typography variant="body1" paragraph><strong>a11y color tools</strong>'s sleek interface makes it a breeze to navigate. Simply input your foreground and background colors, and let the magic happen. In an instant, <strong>a11y color tools</strong> generates the contrast ratio and provides a pass or fail indication based on WCAG guidelines.</Typography>
					<Typography variant="body1" paragraph>But that's not all! <strong>a11y color tools</strong> lets the discerning designer explore alternative color combinations. The tool suggests accessible color pairings that maintain visual appeal.</Typography>
					<Typography variant="body1" paragraph>So, whether you're an experienced designer or just starting your accessibility journey, <strong>a11y color tools</strong> is your go-to companion. With its effortless usability and expert analysis, achieving WCAG 2.x and Silver Accessibility compliance has never been so stylishly simple.</Typography>
				</CardContent>
			</Card>
		</Container>
	);
}