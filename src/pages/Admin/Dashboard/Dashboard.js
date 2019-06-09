import React from "react";
import useStyles from "./dashboardStyles";
import classNames from "classnames";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Table from "../../../components/Table/Tablr";
import Tasks from "../../../components/Tasks/Taskr";
import CustomTabs from "../../../components/CustomTabs/CustomTabr";
import Danger from "../../../components/Typography/Danger";
import Card from "../../../components/Card/Carr";
import CardHeader from "../../../components/Card/CardHeader";
import CardIcon from "../../../components/Card/CardIcor";
import CardBody from "../../../components/Card/CardBodr";
import CardFooter from "../../../components/Card/CardFooter";

const Dashboard = () => {
  const classes = useStyles();

  const fixedHeightPaper = classNames(classes.paper, classes.fixedHeight);
  return null;
};

export default Dashboard;
