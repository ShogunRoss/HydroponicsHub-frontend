import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '../components/AppBar';
import AppFooter from '../components/AppFooter';

const backgroundImage =
	'/assets/hydroponics-bg.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		color: theme.palette.common.white,
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			height: '80vh',
			minHeight: 500,
			maxHeight: 2000,
		},
	},
	container: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(14),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	background: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: 'center',
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		zIndex: -2,
	},
	backdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.5,
		zIndex: -1,
	},
	button: {
		minWidth: 200,
	},
	h5: {
		marginBottom: theme.spacing(4),
		marginTop: theme.spacing(4),
		[theme.breakpoints.up('sm')]: {
			marginTop: theme.spacing(10),
		},
	},
	more: {
		marginTop: theme.spacing(2),
	},
}));


const WelcomePage = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<AppBar/>
			<section className={classes.root} >
				<Container className={classes.container}>
					<img style={{ display: 'none' }} src={backgroundImage} alt="" />
					<Typography color="inherit" align="center" variant="h2" marked="center">
						Live A Healthier Life
      </Typography>
					<Typography color="inherit" align="center" variant="h5" className={classes.h5}>
						Enjoy our platform to help you control over your hydroponics system
      </Typography>
					<Button
						color="secondary"
						variant="contained"
						size="large"
						className={classes.button}
						component={RouterLink}
						to="/dashboard"
					>
						Dashboard
      </Button>
					<Typography variant="body2" color="inherit" className={classes.more}>
						Discover and control your hydroponics farm
      </Typography>
					<div className={classes.backdrop} />
					<div className={classes.background} />
				</Container>
			</section>
			<AppFooter />
		</Fragment>

	)
}


export default WelcomePage;