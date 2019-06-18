import {
  drawerWidth,
  transition,
  container
} from "../../assets/jss/styles-helper";

const adminStyles = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "inherit",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "32px 16px",
    minHeight: "calc(100vh - 123px)",
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default adminStyles;
