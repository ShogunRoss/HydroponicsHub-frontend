import React, { useRef, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import GridItem from "../../../../components/Grid/GridItem";
import GridContainer from "../../../../components/Grid/GridContainer";
import useStyles from "./deviceFormStyles";
import { serverUrl } from "../../../../config";

const NewDeviceForm = props => {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(false);

  const secretKeyEl = useRef(null);
  const nameEl = useRef(null);
  const locationEl = useRef(null);
  const tdsWantedEl = useRef(null);
  const phWantedEl = useRef(null);
  const floodDurationEl = useRef(null);
  const floodIntervalEl = useRef(null);
  const startFloodTimeEl = useRef(null);
  const endFloodTimeEl = useRef(null);
  const startLedTimeEl = useRef(null);
  const endLedTimeEl = useRef(null);

  const submitNewDeviceHandler = event => {
    event.preventDefault();
    // setIsLoading(true);

    let secretKey = secretKeyEl.current.value;
    let name = nameEl.current.value;
    let location = locationEl.current.value;
    let tdsWanted = parseFloat(tdsWantedEl.current.value);
    let phWanted = parseFloat(phWantedEl.current.value);
    let floodInterval = parseFloat(floodIntervalEl.current.value);
    let floodDuration = parseFloat(floodDurationEl.current.value);
    let startFloodTime = startFloodTimeEl.current.value;
    let endFloodTime = endFloodTimeEl.current.value;
    let startLedTime = startLedTimeEl.current.value;
    let endLedTime = endLedTimeEl.current.value;

    let requestBody = {
      query: `
        mutation RegisterDevice($secretKey: String!, $name: String!, $location: String!, $tdsWanted: Float!, $phWanted: Float!, $floodInterval: Float!, $floodDuration: Float!, $startFloodTime: String!, $endFloodTime: String!,  $startLedTime: String!, $endLedTime: String! ) {
          registerDevice(deviceInput:{secretKey: $secretKey, name: $name, location: $location, tdsWanted: $tdsWanted, phWanted: $phWanted, startLedTime: $startLedTime, floodInterval: $floodInterval, floodDuration: $floodDuration, startFloodTime: $startFloodTime, endFloodTime: $endFloodTime, endLedTime: $endLedTime}) {
            name
            createdAt
            location
            tdsWanted
            phWanted
            floodInterval
            floodDuration
            startFloodTime
            endFloodTime
            startLedTime
            endLedTime
          }
        }
      `,
      variables: {
        secretKey: secretKey,
        name: name,
        location: location,
        tdsWanted: tdsWanted,
        phWanted: phWanted,
        floodInterval: floodInterval,
        floodDuration: floodDuration,
        startFloodTime: startFloodTime,
        endFloodTime: endFloodTime,
        startLedTime: startLedTime,
        endLedTime: endLedTime
      }
    };

    fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      // .then(resData => {
      //   setIsLoading(false);
      //   props.callback(
      //     Object.keys(resData.data.registerDevice).map(key => {
      //       if (key === "createdAt") {
      //         return new Date(resData.data.registerDevice[key]).toDateString();
      //       } else {
      //         return resData.data.registerDevice[key];
      //       }
      //     })
      //   );
      // })
      .then(() => {
        // setIsLoading(false);
        props.callback();
      })
      .catch(err => {
        // setIsLoading(false);
        console.error(err);
      });
  };

  return (
    <form id="device" onSubmit={submitNewDeviceHandler}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <TextField
            className={classes.textField}
            label="Secret Key"
            id="secrect-key"
            fullWidth
            required
            autoFocus
            inputRef={secretKeyEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <TextField
            className={classes.textField}
            label="Device Name"
            id="name"
            fullWidth
            required
            inputRef={nameEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <TextField
            className={classes.textField}
            label="Location"
            id="location"
            fullWidth
            required
            inputRef={locationEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="TDS Wanted (ppm)"
            id="tdsWanted"
            type="number"
            defaultValue={800}
            inputProps={{
              step: 1,
              min: 400,
              max: 1500
            }}
            fullWidth
            required
            inputRef={tdsWantedEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="pH Wanted"
            id="phWanted"
            defaultValue={6}
            type="number"
            inputProps={{
              step: 0.1,
              min: 5,
              max: 7
            }}
            fullWidth
            required
            inputRef={phWantedEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="Flood Interval (Hour)"
            id="floodInterval"
            type="number"
            defaultValue={0.5}
            inputProps={{
              step: 0.1,
              min: 0
            }}
            fullWidth
            required
            inputRef={floodIntervalEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="Flood Duration (Hour)"
            id="floodDuration"
            type="number"
            defaultValue={0.5}
            inputProps={{
              step: 0.1,
              min: 0
            }}
            fullWidth
            required
            inputRef={floodDurationEl}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="Start Flood Time"
            id="startFloodTime"
            type="time"
            defaultValue={"06:00"}
            fullWidth
            required
            inputRef={startFloodTimeEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="End Flood Time"
            id="endFloodTime"
            type="time"
            defaultValue={"17:00"}
            fullWidth
            required
            inputRef={endFloodTimeEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="Start LED Time"
            id="startLedTime"
            type="time"
            defaultValue={"06:00"}
            fullWidth
            required
            inputRef={startLedTimeEl}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <TextField
            className={classes.textField}
            label="End LED Time"
            id="endtLedTime"
            type="time"
            defaultValue={"17:00"}
            fullWidth
            required
            inputRef={endLedTimeEl}
          />
        </GridItem>
      </GridContainer>
    </form>
  );
};

export default NewDeviceForm;
