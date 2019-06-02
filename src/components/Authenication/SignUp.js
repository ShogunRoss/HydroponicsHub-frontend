import React, { useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import AuthContext from '../../context/auth-context';

const useStyles = makeStyles(theme => ({
	// '@global': {
	//   body: {
	//     backgroundColor: theme.palette.common.white,
	//   },
	// },
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignUp = () => {
	const classes = useStyles();

	const emailEl = useRef(null);
	const newPasswordEl = useRef(null);
	const verifyPasswordEl = useRef(null);
	const firstNameEl = useRef(null);
	const lastNameEl = useRef(null);
	const phoneEl = useRef(null);

	const submitHandler = (event) => {
		event.preventDefault();
		let email = emailEl.current.value;
		let firstName = firstNameEl.current.value;
		let lastName = lastNameEl.current.value;
		let phone = phoneEl.current.value;
		let password

		if (newPasswordEl.current.value === verifyPasswordEl.current.value) {
			password = newPasswordEl.current.value;
		} else {
			console.error('Your verify password are unmatched!');
			return;
		}

		let requestBody = {
			query: `
          mutation CreateUser($email: String!, $password: String!){
            createUser(userInput:{email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
			variables: {
				email: email,
				password: password
			}
		}

		fetch('http://localhost:5000/graphql', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if (res.status !== 200 && res.status !== 201) {
				throw new Error('Failed!');
			}
			return res.json();
		}).then(resData => {
			console.log(resData)
			// if (resData.data.login.token) {
			// 	this.context.login(
			// 		resData.data.login.token,
			// 		resData.data.login.userId,
			// 		resData.data.login.tokenExpiration
			// 	);
			// }
		}).catch(err => {
			console.log(err)
		});
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
        </Typography>
				<form className={classes.form} onSubmit={submitHandler}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoComplete="given-name"
								autoFocus
								inputRef={firstNameEl}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="family-name"
								inputRef={lastNameEl}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								id="phone"
								label="Phone"
								name="phone"
								autoComplete="tel"
								inputRef={phoneEl}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								inputRef={emailEl}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="New Password"
								type="password"
								id="new-password"
								autoComplete="new-password"
								inputRef={newPasswordEl}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Verify Password"
								type="password"
								id="verify-password"
								autoComplete="current-password"
								inputRef={verifyPasswordEl}
							/>
						</Grid>
						{/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
          </Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link
								component={RouterLink}
								to="/signin"
								variant="body2">
								Already have an account? Sign in
              </Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

export default SignUp;