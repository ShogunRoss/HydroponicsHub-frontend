import React, { Fragment, useState } from "react";
import useStyles from "./dashboardStyles";
import classNames from "classnames";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
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
import SaveAlt from "@material-ui/icons/SaveAlt";
import CheckCircle from "@material-ui/icons/CheckCircle";
// core components
import TextField from "@material-ui/core/TextField";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardIcon from "../../../components/Card/CardIcon";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../../variables/charts.jsx";

const Dashboard = () => {
  const classes = useStyles();

  let tdsValue = 888.1;
  let temperatureValue = 27.2;
  let phValue = 6.8;

  const [tdsSaved, setTdsSaved] = useState(false);
  const [tempSaved, setTempSaved] = useState(false);
  const [phSaved, setPhSaved] = useState(false);

  const handleSaveButtonClick = type => {
    console.log(type);
    switch (type) {
      case "tds":
        setTdsSaved(true);
        break;
      case "temp":
        setTempSaved(true);
        break;
      case "ph":
        setPhSaved(true);
        break;
    }
  };
  return (
    <Fragment>
      <GridContainer>
        <GridContainer xs={12} sm={12} md={3} item>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>
                    <SvgIcon viewBox="0 0 512 512">
                      <path d="m330 105v407h182v-407zm152 30v45h-122v-45zm-122 347v-38.072c8.833 5.123 19.075 8.072 30 8.072h62c10.925 0 21.167-2.949 30-8.072v38.072zm92-60h-62c-16.542 0-30-13.458-30-30v-182h122v182c0 16.542-13.458 30-30 30z" />
                      <path d="m255 181.899v-76.899h-33.685l-30-105h-82.629l-30 105h-33.686v76.899c-25.849 6.677-45 30.195-45 58.101v272h300v-272c0-27.906-19.151-51.424-45-58.101zm-30-1.899h-30v-45h30zm-60-45v45h-30v-45zm-33.686-105h37.371l21.428 75h-80.228zm-26.314 105v45h-30v-45zm-45 75h180c16.542 0 30 13.458 30 30v15h-240v-15c0-16.542 13.458-30 30-30zm210 75v122h-240v-122zm-240 197v-45h240v45z" />
                    </SvgIcon>
                  </Icon>
                </CardIcon>
                <p className={classes.cardCategory}>TDS</p>
                <h1 className={classes.cardTitle}>
                  {tdsValue} <small>ppm</small>
                </h1>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card noMarginTop>
              <CardHeader stats icon>
                <p className={classes.cardCategory}>Wanted TDS</p>
              </CardHeader>
              <div className={classes.inputDivWrapper}>
                <TextField
                  id="outlined-number"
                  label="Value"
                  value={tdsValue}
                  //onChange={handleChange("age")}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                  variant="outlined"
                />
                <IconButton
                  aria-label="Save TDS"
                  onClick={handleSaveButtonClick.bind(this, "tds")}
                >
                  {tdsSaved ? <CheckCircle color="primary" /> : <SaveAlt />}
                </IconButton>
              </div>
            </Card>
          </GridItem>
        </GridContainer>

        <GridItem xs={12} sm={12} md={9}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>TDS</h3>
              <p className={classes.cardCategory}>
                Figure showing the change of Nutrient index
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        {/* <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>
                  <SvgIcon viewBox="0 0 301.605 301.605">
                    <path
                      d="M236.896,38.375v12.854h-49.808V38.375H236.896z M216.009,66.389h-28.921v12.854h28.921V66.389z M187.088,107.257h49.808
                        V94.404h-49.808V107.257z M216.009,122.425h-28.921v12.854h28.921V122.425z M187.088,163.293h49.808v-12.854h-49.808V163.293z
                        M194.852,236.533c0,35.881-29.191,65.072-65.072,65.072s-65.072-29.191-65.072-65.072c0-23.252,12.211-44.384,32.134-56.074
                        V32.938C96.843,14.775,111.618,0,129.78,0s32.938,14.775,32.938,32.938v147.522C182.641,192.137,194.852,213.275,194.852,236.533z
                        M181.998,236.533c0-19.73-10.964-37.565-28.619-46.53l-3.515-1.787V32.944c0-11.08-9.01-20.084-20.084-20.084
                        c-11.073,0-20.084,9.004-20.084,20.084v155.272l-3.515,1.787c-17.655,8.972-28.619,26.806-28.619,46.53
                        c0,28.792,23.426,52.218,52.218,52.218S181.998,265.325,181.998,236.533z M171.291,236.533c0,22.886-18.619,41.505-41.511,41.505
                        c-22.886,0-41.505-18.619-41.505-41.505c0-18.76,12.674-35.232,30.823-40.058l2.384-0.636v-79.275h16.601v79.269l2.384,0.643
                        C158.624,201.301,171.291,217.78,171.291,236.533z M131.837,208.866c-0.99-4.396-5.411-7.288-9.917-6.26
                        c-15.733,3.56-26.723,17.32-26.723,33.465c0,4.569,3.721,8.291,8.291,8.291s8.291-3.721,8.291-8.291
                        c0-8.207,5.797-15.482,13.798-17.288C130.024,217.76,132.839,213.313,131.837,208.866z"
                    />
                  </SvgIcon>
                </Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Temperature</p>
              <h1 className={classes.cardTitle}>
                {temperatureValue} <small>°C</small>
              </h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>
                  <SvgIcon viewBox="0 0 512 512">
                    <path d="m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm0 469.332031c-117.632812 0-213.332031-95.699219-213.332031-213.332031s95.699219-213.332031 213.332031-213.332031 213.332031 95.699219 213.332031 213.332031-95.699219 213.332031-213.332031 213.332031zm0 0" />
                    <path d="m234.667969 256h-64c-11.78125 0-21.335938 9.550781-21.335938 21.332031v128h42.667969v-42.664062h42.667969c11.78125 0 21.332031-9.554688 21.332031-21.335938v-64c0-11.78125-9.550781-21.332031-21.332031-21.332031zm-21.335938 64h-21.332031v-21.332031h21.332031zm0 0" />
                    <path d="m341.332031 320h-21.332031v-64h-42.667969v149.332031h42.667969v-42.664062h21.332031v42.664062h42.667969v-149.332031h-42.667969zm0 0" />
                    <path d="m256 85.332031c-18.550781 0-36.695312 3.070313-53.820312 8.808594l-13.761719-20.640625-35.5 23.667969 10.457031 15.683593c-26.175781 16.925782-47.796875 40.925782-61.605469 69.992188l38.542969 18.308594c10.445312-21.988282 26.847656-40.121094 46.707031-52.835938l51.234375 76.851563 35.5-23.667969-46.746094-70.113281c9.402344-2.210938 19.121094-3.386719 28.992188-3.386719 49.167969 0 94.582031 28.714844 115.691406 73.152344l38.539063-18.308594c-28.140625-59.234375-88.679688-97.511719-154.230469-97.511719zm0 0" />
                  </SvgIcon>
                </Icon>
              </CardIcon>
              <p className={classes.cardCategory}>pH</p>
              <h1 className={classes.cardTitle}>{phValue}</h1>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
      </GridContainer>

      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h3 className={classes.cardTitle}>TDS</h3>
              <p className={classes.cardCategory}>
                Figure showing the change of Nutrient index
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer> */}
    </Fragment>
  );
};

export default Dashboard;
