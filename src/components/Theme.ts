import {alpha, createTheme, lighten, useMediaQuery, useTheme} from '@mui/material';
import {blue, blueGrey} from '@mui/material/colors';
import {useMemo} from 'react';

export const useAppTheme = (overrideMode?: 'light' | 'dark') => {
	const prefersDarkMode = (useMediaQuery('(prefers-color-scheme: dark)') && overrideMode !== 'light') || overrideMode === 'dark';
	const divider         = blueGrey[prefersDarkMode ? 600 : 300];
	
	return useMemo(() => createTheme({
		palette:    {
			mode:       prefersDarkMode ? 'dark' : 'light',
			primary:    {
				main: blueGrey[prefersDarkMode ? 400 : 800]
			},
			secondary:  {
				main: blue[prefersDarkMode ? 200 : 900]
			},
			background: {
				paper:   prefersDarkMode ? blueGrey[900] : '#fff',
				default: prefersDarkMode ? blueGrey[800] : lighten(blueGrey[100], .75)
			},
			divider
		},
		typography: {
			h1: {
				fontSize: 48
			},
			h2: {
				fontSize: 24
			},
			h3: {
				fontSize: 20
			},
			h4: {
				fontSize: 14
			}
		},
		components: {
			MuiBackdrop:      {
				styleOverrides: {
					root: {
						background:     alpha(blueGrey[prefersDarkMode ? 700 : 600], .5),
						backdropFilter: `blur(5px) grayscale(100%)`
					}
				}
			},
			MuiButton:        {
				defaultProps: {
					color: 'secondary'
				}
			},
			MuiCard:          {
				defaultProps:   {
					elevation: 0,
					variant:   'outlined'
				},
				styleOverrides: {
					root: {
						overflow: 'visible'
					}
				}
			},
			MuiCardHeader:    {
				styleOverrides: {
					root: {
						borderBottom: `1px solid ${divider}`
					}
				},
				defaultProps:   {
					titleTypographyProps: {
						variant: 'h3'
					}
				}
			},
			MuiChip:          {
				styleOverrides: {
					root: {
						'& > svg': {
							marginLeft: 6
						}
					}
				}
			},
			MuiDialog:        {
				styleOverrides: {
					paper: {
						background: prefersDarkMode ? blueGrey[900] : '#fff'
					}
				}
			},
			MuiOutlinedInput: {
				styleOverrides: {
					notchedOutline: {
						borderColor: blueGrey[prefersDarkMode ? 100 : 600]
					}
				}
			},
			MuiListItemIcon:  {
				styleOverrides: {
					root: {
						minWidth: 36
					}
				}
			},
			MuiTab:           {
				styleOverrides: {
					root: {
						'&.Mui-selected': {
							color:      prefersDarkMode ? '#fff' : '#000',
							fontWeight: 'bold'
						}
					}
				}
			},
			MuiTableCell:     {
				styleOverrides: {
					root: {
						borderBottomColor: divider
					}
				}
			},
			MuiToggleButton:  {
				styleOverrides: {
					root: {
						borderColor: blueGrey[prefersDarkMode ? 400 : 200],
						
						'&.Mui-selected': {
							backgroundColor: blueGrey[prefersDarkMode ? 400 : 600],
							color:           prefersDarkMode ? '#000' : '#fff'
						},
						
						'&:hover, &:focus': {
							backgroundColor: `${blueGrey[prefersDarkMode ? 300 : 700]} !important`,
							color:           prefersDarkMode ? '#000' : '#fff'
						}
					}
				}
			}
		}
	}), [prefersDarkMode, divider]);
};

export const useInvertedTheme = () => {
	const theme = useTheme();
	return useAppTheme(theme.palette.mode === 'light' ? 'dark' : 'light');
};

export const useDarkMode = () => useTheme().palette.mode === 'dark';