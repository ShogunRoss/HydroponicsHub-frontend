import React from 'react';
// import ProductHeroLayout from './ProductHeroLayout';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const backgroundImage =
	'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundColor: '#7fc7d9', // Average color of the background image.
		backgroundPosition: 'center',
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
		<p>Welcome Page</p>
	)
}


export default WelcomePage;