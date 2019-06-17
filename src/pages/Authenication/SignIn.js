import React, { useRef, useContext, useState, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "../../components/Typography/Typography";
import useStyles from "./authenicationStyles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "../../components/AppHeader/AppHeader";
import AuthContext from "../../context/auth-context";
import { serverUrl } from "../../config";

const SignIn = () => {
  const classes = useStyles();

  const context = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const emailEl = useRef(null);
  const passwordEl = useRef(null);

  const submitHandler = event => {
    event.preventDefault();
    setIsLoading(true);

    let email = emailEl.current.value;
    let password = passwordEl.current.value;

    let requestBody = {
      query: `
        query Login($email: String!, $password: String!){
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
			`,
      variables: {
        email: email,
        password: password
      }
    };
    fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        setIsLoading(false);
        if (resData.data.login.token) {
          context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err);
      });
  };

  return (
    <Fragment>
      <AppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" gutterBottom marked="center">
            SIGN IN
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailEl}
              disabled={isLoading}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordEl}
              disabled={isLoading}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              disabled={isLoading}
            />
            <div className={classes.wrapper}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isLoading}
              >
                Sign In
              </Button>
              {isLoading && (
                <CircularProgress
                  size={30}
                  className={classes.buttonProgress}
                />
              )}
            </div>

            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};
export default SignIn;
