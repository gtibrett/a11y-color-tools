import {Card, CardContent, CardHeader, getContrastRatio, Grid, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme} from '@mui/material';
import {calcAPCA} from 'apca-w3';
import useComponentDimensionsWithRef from '../components/useComponentDimensionsWithRef';
import Compliance from './Compliance';
import {fontSamples} from './FontSamples';
import Sample from './Sample';

const round = (num: number) => Math.round(num * 1000) / 1000;

type ContrastCardProps = {
	foreground: string;
	background: string;
}

export default function ContrastCard({foreground, background}: ContrastCardProps) {
	const theme             = useTheme();
	const {ref, dimensions} = useComponentDimensionsWithRef();
	
	const sx: SxProps = {
		height:     dimensions.width,
		border:     `1px solid ${theme.palette.divider}`,
		background: background,
		color:      foreground
	};
	
	const wcag = getContrastRatio(foreground, background);
	const apca = Math.abs(Number(calcAPCA(foreground, background)));
	
	return (
		<Card sx={{height: '100%'}}>
			<CardHeader title="Contrast"
				action={
					<Grid container spacing={4} justifyContent="space-between" alignItems="baseline">
						<Grid item><Typography variant="h3" component="p">{round(wcag)}:1</Typography></Grid>
						<Grid item><Typography variant="h3" component="p">L<sup>c</sup> {round(Number(apca))}</Typography></Grid>
					</Grid>
				}/>
			<CardContent>
				<Grid container spacing={2} alignItems="flex-start" justifyContent="center">
					<Grid item xs={12} sm={6} md={4}>
						<Grid container ref={ref} sx={sx} justifyContent="center" alignItems="center" spacing={0}>
							{
								fontSamples.map((sample, i) => (
									<Grid key={i} item xs={12}>
										<Sample color={foreground} {...sample}/>
									</Grid>
								))
							}
						</Grid>
					</Grid>
					<Grid item xs={12} md={8}>
						<TableContainer>
							<Table size="small">
								<TableHead>
									<TableRow>
										<TableCell variant="head" align="center">Font Size &amp; Weight</TableCell>
										<TableCell variant="head" align="center">2.x</TableCell>
										<TableCell variant="head" align="center">Silver</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{
										fontSamples.map((sample, i) => (
											<TableRow key={i}>
												<TableCell align="center">
													<Sample color={theme.palette.text.primary} {...sample}/>
												</TableCell>
												<TableCell align="center">
													<Compliance ratio={Number(wcag)} sample={sample} version="2.x"/>
												</TableCell>
												<TableCell align="center">
													<Compliance ratio={Number(apca)} sample={sample} version="silver"/>
												</TableCell>
											</TableRow>
										))
									}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}