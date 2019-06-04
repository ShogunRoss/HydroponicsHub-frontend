import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.secondary.light,
	},
	container: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
		display: 'flex',
	},
	iconsWrapper: {
		height: 120,
	},
	icons: {
		display: 'flex',
	},
	icon: {
		width: 48,
		height: 48,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.warning.main,
		marginRight: theme.spacing(1),
		'&:hover': {
			backgroundColor: theme.palette.warning.dark,
		},
	},
	list: {
		margin: 0,
		listStyle: 'none',
		paddingLeft: 0,
	},
	listItem: {
		paddingTop: theme.spacing(0.5),
		paddingBottom: theme.spacing(0.5),
	},
	language: {
		marginTop: theme.spacing(1),
		width: 150,
	},
}));

const LANGUAGES = [
	{
		code: 'en-US',
		name: 'English',
	},
	{
		code: 'fr-FR',
		name: 'Français',
	},
	{
		code: 'vi-VI',
		name: 'Tiếng Việt',
	},
];

function AppFooter(props) {
	const classes = useStyles();

	return (
		<Typography component="footer" className={classes.root}>
			<Container className={classes.container}>
				<Grid container spacing={5}>
					<Grid item xs={6} sm={4} md={3}>
						<Grid
							container
							direction="column"
							justify="flex-end"
							className={classes.iconsWrapper}
							spacing={2}
						>
							<Grid item className={classes.icons}>
								<a href="https://www.facebook.com/long.nguyencong" target="_blank" className={classes.icon}>
									<img src="/assets/appFooterFacebook.png" alt="Facebook" />
								</a>
								<a href="mailto:hydroponicshubproject@gmail.com" target="_blank" className={classes.icon}>
									<img src="/assets/appFooterGmail.png" alt="Twitter" />
								</a>
							</Grid>
							<Grid item>© 2019 Bio-Mech Lab</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6} sm={4} md={2}>
						<Typography variant="h6" marked="left" gutterBottom>
							Legal
            </Typography>
						<ul className={classes.list}>
							<li className={classes.listItem}>
								<Link href="#">Terms</Link>
							</li>
							<li className={classes.listItem}>
								<Link href="#">Privacy</Link>
							</li>
						</ul>
					</Grid>
					<Grid item xs={6} sm={8} md={4}>
						<Typography variant="h6" marked="left" gutterBottom>
							Language
            </Typography>
						<TextField
							select
							SelectProps={{
								native: true,
							}}
							className={classes.language}
						>
							{LANGUAGES.map(language => (
								<option value={language.code} key={language.code}>
									{language.name}
								</option>
							))}
						</TextField>
					</Grid>
					<Grid item>
						<Typography variant="caption">
							{'Icons made by '}
							<Link href="https://www.freepik.com" rel="nofollow" title="Freepik">
								Freepik
              </Link>
							{' from '}
							<Link href="https://www.flaticon.com" rel="nofollow" title="Flaticon">
								www.flaticon.com
              </Link>
							{' is licensed by '}
							<Link
								href="https://creativecommons.org/licenses/by/3.0/"
								title="Creative Commons BY 3.0"
								target="_blank"
								rel="noopener noreferrer"
							>
								CC 3.0 BY
              </Link>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Typography>
	);
}

AppFooter.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default React.memo(AppFooter);