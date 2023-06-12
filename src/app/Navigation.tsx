import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from '@gtibrett/mui-additions';
import {Grid, Hidden, IconButton, Menu, MenuItem, SxProps, useTheme} from '@mui/material';
import {MouseEvent, useState} from 'react';
import {useLocation, useNavigate} from 'react-router';
import useRoutes from './useRoutes';

export default function Navigation() {
	const {pathname}              = useLocation();
	const navigate                = useNavigate();
	const theme                   = useTheme();
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open                    = Boolean(anchorEl);
	const routes                  = useRoutes().filter(l => !!l.label);
	
	const navLinkSx: SxProps = {
		textDecoration:                         'none',
		py:                                     .5,
		px:                                     .5,
		mx:                                     .5,
		borderBottom:                           '8px solid transparent',
		'&:hover, &:focus, &:active, &.active': {
			borderBottomColor: theme.palette.secondary.main
		}
	};
	
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	
	const handleClose = () => {
		setAnchorEl(null);
	};
	
	const handleLink = (url: string) => () => {
		navigate(url);
		handleClose();
	};
	
	return <>
		<Hidden mdDown>
			{routes.map(({path, label}, i) => {
					const isActive = path === pathname || [path].filter(p => p && Number(p?.length) > 1 && pathname.startsWith(p)).length > 0;
					return (
						<Grid item key={i}>
							<Link color="inherit" className={isActive ? 'active' : ''} sx={navLinkSx} to={path}>{label}</Link>
						</Grid>
					);
				}
			)}
		</Hidden>
		<Hidden mdUp>
			<Grid item>
				<div>
					<IconButton
						id="hamburger-button"
						aria-controls={open ? 'hamburger-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<FontAwesomeIcon icon={faBars} title="toggle navigation menu" color={theme.palette.secondary.main}/>
					</IconButton>
					<Menu
						hideBackdrop
						id="hamburger-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'hamburger-button'
						}}
					>
						{routes.map(({path, label}) => (
								<MenuItem key={String(path)} onClick={handleLink(String(path))}>{label}</MenuItem>
							)
						)}
					</Menu>
				</div>
			</Grid>
		</Hidden>
	</>;
}