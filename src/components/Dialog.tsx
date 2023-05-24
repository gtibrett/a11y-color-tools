import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Dialog as MuiDialog, DialogContent, DialogTitle, Grid, IconButton, Link, LinkProps, Typography} from '@mui/material';
import {PropsWithChildren, ReactNode, useState} from 'react';

type DialogProps = {
	linkLabel: LinkProps['children'];
	href: LinkProps['href'];
	title: ReactNode;
}

export default function Dialog({linkLabel, title, href, children}: PropsWithChildren<DialogProps>) {
	const [open, setOpen] = useState<boolean>(false);
	
	return (
		<>
			<Link href={href} color="inherit" onClick={() => setOpen(true)}>{linkLabel}</Link>
			<MuiDialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
				<DialogTitle>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs>
							<Typography variant="h3" component="h2">{title}</Typography>
						</Grid>
						<Grid item>
							<IconButton onClick={() => setOpen(false)} title="close dialog">
								<FontAwesomeIcon icon={faTimes}/>
							</IconButton>
						</Grid>
					</Grid>
				</DialogTitle>
				<DialogContent dividers>
					{children}
				</DialogContent>
			</MuiDialog>
		</>
	);
}