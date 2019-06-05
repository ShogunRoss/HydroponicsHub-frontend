import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AuthContext from "../../context/auth-context";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: "space-between"
  },
  placeholder: {
    height: 56,
    [theme.breakpoints.up("sm")]: {
      height: 64
    }
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      flex: 1
    }
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  menuButton: {
    marginRight: theme.spacing(2)
    // justifyContent: 'flex-start'
  },
  linkSecondary: {
    color: theme.palette.secondary.light
  },
  title: {
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem"
    }
  },
  button: {
    fontSize: "0.65rem",
    padding: theme.spacing(1, 1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
      padding: theme.spacing(1, 2)
    }
  }
}));

const HideOnScroll = props => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const HeaderAppBar = props => {
  const classes = useStyles();
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <HideOnScroll {...props}>
            <AppBar position="sticky">
              <Toolbar className={classes.toolbar}>
                {context.token && (
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                  >
                    <MenuIcon />
                  </IconButton>
                )}
                <div className={classes.left} />

                <Link
                  component={RouterLink}
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={classes.title}
                  to="/"
                >
                  HYDROPONICS HUB
                </Link>
                <div className={classes.right}>
                  {!context.token ? (
                    <Fragment>
                      <Button
                        color="inherit"
                        component={RouterLink}
                        to="/signin/"
                        className={classes.button}
                      >
                        Sign In
                      </Button>

                      <Button
                        color="inherit"
                        component={RouterLink}
                        to="/signup/"
                        className={classNames(
                          classes.button,
                          classes.linkSecondary
                        )}
                      >
                        Sign Up
                      </Button>
                    </Fragment>
                  ) : (
                    <Button color="inherit" onClick={context.logout}>
                      Sign Out
                    </Button>
                  )}
                </div>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default HeaderAppBar;
