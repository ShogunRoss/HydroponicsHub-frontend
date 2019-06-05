import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Typography from "../../components/Typography/Typography";
import Container from "@material-ui/core/Container";

import { Link as RouterLink } from "react-router-dom";
import AppHeader from "../../components/AppHeader/AppHeader";
import AppFooter from "../../components/AppFooter/AppFooter";
import useStyles from "./landingPageStyles";

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppHeader />
      <section className={classes.root}>
        <Container className={classes.container}>
          {/* <img style={{ display: "none" }} src={backgroundImage} alt="" /> */}
          <Typography
            color="inherit"
            align="center"
            variant="h2"
            marked="center"
          >
            LIVE A HEALTHIER LIFE
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            className={classes.h5}
          >
            Enjoy our platform to help you control over your hydroponics system
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
            component={RouterLink}
            to="/admin/dashboard"
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
  );
};

export default WelcomePage;
