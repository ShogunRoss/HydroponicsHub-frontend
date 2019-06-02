import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		justifyContent: 'space-between',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		textAlign: 'center',
	},
}));

function HeaderAppBar() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>

					<Link
						component={RouterLink}
						variant="h6"
						underline="none"
						color="inherit"
						className={classes.title}
						to="/"
					>
						Hydroponics Hub
          </Link>
					<Button
						color="inherit"
						component={RouterLink}
						to="/signin/"
					>
						Sign In
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default HeaderAppBar;