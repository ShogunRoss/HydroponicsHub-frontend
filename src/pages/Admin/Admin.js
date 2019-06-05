import React from "react";

import routes from "../../routes/dashboardRoutes";
import { Route, Switch } from "react-router-dom";
import logo from "../../assets/img/reactlogo.png";
import { NavLink } from "react-router-dom";
import useStyles from "./adminStyles";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

const Admin = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = classNames(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          )
        }}
        open={open}
      >
        <div className={classes.toolbarWrapper}>
          <Link
            component={NavLink}
            to="/"
            varient="h6"
            className={classes.logoLink}
            color="inherit"
            underline="none"
          >
            <div className={classes.logoImage}>
              <img src={logo} alt="logo" className={classes.img} />
            </div>
            Home
          </Link>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {/* <div className={classes.toolbarIcon} /> */}
        <Divider />
        <List>
          {routes.map((prop, key) => {
            return (
              <Link
                component={NavLink}
                to={prop.layout + prop.path}
                underline="none"
                color="inherit"
                variant="h6"
                activeClassName="active"
                key={key}
              >
                <ListItem button>
                  <ListItemIcon>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText primary={prop.name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

// class Admin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: image,
//       color: "blue",
//       hasImage: true,
//       fixedClasses: "dropdown show",
//       mobileOpen: false
//     };
//   }
//   handleDrawerToggle = () => {
//     this.setState({ mobileOpen: !this.state.mobileOpen });
//   };
//   getRoute() {
//     return this.props.location.pathname !== "/admin/maps";
//   }
//   resizeFunction = () => {
//     if (window.innerWidth >= 960) {
//       this.setState({ mobileOpen: false });
//     }
//   };
//   componentDidMount() {
//     window.addEventListener("resize", this.resizeFunction);
//   }
//   componentDidUpdate(e) {
//     if (e.history.location.pathname !== e.location.pathname) {
//       if (this.state.mobileOpen) {
//         this.setState({ mobileOpen: false });
//       }
//     }
//   }
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.resizeFunction);
//   }
//   render() {
//     const { classes, ...rest } = this.props;
//     return (
//       <div className={classes.wrapper}>
//         <Sidebar
//           routes={routes}
//           logoText={"Home"}
//           logo={logo}
//           image={this.state.image}
//           handleDrawerToggle={this.handleDrawerToggle}
//           open={this.state.mobileOpen}
//           color={this.state.color}
//           {...rest}
//         />
//         <div className={classes.mainPanel}>
//           <Navbar
//             routes={routes}
//             handleDrawerToggle={this.handleDrawerToggle}
//             {...rest}
//           />
//           <div className={classes.map}>{switchRoutes}</div>
//         </div>
//       </div>
//     );
//   }
// }

export default Admin;
