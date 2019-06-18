import { makeStyles } from "@material-ui/core";

const top = 50;
const left = 50;

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    minWidth: theme.spacing(100),
    boxShadow: theme.shadows[5],
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {
      minWidth: "90%",
      maxHeight: "85%"
    }
  },

  content: {
    // padding: theme.spacing(3)
    overflow: "auto"
  },

  action: {
    textAlign: "right",
    // padding: theme.spacing(3),
    display: "block"
  },

  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
}));

export default useStyles;
