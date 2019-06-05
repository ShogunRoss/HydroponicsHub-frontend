import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#05CE78",
      light: "#60ffa8",
      dark: "#009c4b"
    },
    secondary: {
      main: "#dce775",
      light: "#ffffa6",
      dark: "#a8b545"
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e"
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700]
    },
    background: {
      default: "#e5e5e5"
    }
  },
  typography: {
    useNextVariants: true,
    fontWeightRegular: "normal",
    fontWeightBold: "bold",
    fontFamily: ["Montserrat", "Roboto", "Arial", "sans-serif"].join(",")
  }
});

export default theme;
