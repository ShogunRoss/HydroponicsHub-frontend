import {
  defaultFont,
  dangerColor,
  whiteColor,
  grayColor,
  primaryBoxShadow,
  primaryColor,
  hexToRgb,
  blackColor
} from "../../../assets/jss/styles-helper";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  aboveTableWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2)
  },
  search: {
    "& > div": {
      marginTop: "0"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px"
    }
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available"
    },
    display: "inline-block"
  },
  margin: {
    zIndex: "4",
    margin: "0"
  },
  newDeviceText: {
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  newDeviceIcon: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px !important"
    }
  }
}));

export default useStyles;
