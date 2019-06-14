import React from "react";
import PropTypes from "prop-types";
import routes from "../../routes/dashboardRoutes";
import { Route, Switch } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import adminStyles from "./adminStyles";

import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

import logo from "../../assets/img/reactlogo.png";
import image from "../../assets/img/sidebar.jpg";

import { serverUrl } from "../../config";
import DevicesContext from "../../context/devices-context";

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

const requestBody = {
  query: `
        query {
          devices {
            name
            installationDate
            history{
              nutrient
              pH
              temperature
              time
            }
          }
        } 
			`
};
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.mainPanel = React.createRef();
    this.state = {
      image: image,
      color: "green",
      hasImage: true,
      fixedClasses: "dropdown show",
      mobileOpen: false,
      devices: []
    };
  }
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.resizeFunction);
    console.log("Admin did mount");
    fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed to fetch.");
        }
        return res.json();
      })
      .then(data => {
        this.setState({ devices: data.data.devices });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.mainPanel.current.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <SideBar
          routes={routes}
          logoText={"Home"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />
        <div className={classes.mainPanel} ref={this.mainPanel}>
          <NavBar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <div className={classes.content}>
            <DevicesContext.Provider
              value={{
                devices: this.state.devices
              }}
            >
              <div className={classes.container}>{switchRoutes}</div>
            </DevicesContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(adminStyles)(Admin);
