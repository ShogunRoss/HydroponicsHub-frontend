import React, { useEffect, useState, useRef } from "react";
// import DevicesContext from "../../../context/devices-context";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

import CustomInput from "../../../components/CustomInput/CustomInput";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import Card from "../../../components/Card/Card";
import Table from "../../../components/Table/Table";
import Button from "../../../components/CustomButton/CustomButton";
import useStyles from "./deviceStyles";

import Modal from "../../../components/CustomModal/CustomModal";

import { useHttp } from "../../../hooks/http";
import { serverUrl } from "../../../config";

const requestBody = {
  query: `
        query {
          devices {
            name
            installationDate
            location
            tdsWanted
            phWanted
            floodDuration
            ledDuration
            sensorInterval
            floodInterval
            ledInterval
          }
        }
      `
};

const DevicePage = () => {
  const classes = useStyles();
  // const context = useContext(DevicesContext);
  // const deviceList = context.devices;

  const [isLoading, fetchedData] = useHttp(serverUrl, requestBody, []);
  const deviceList = fetchedData ? fetchedData.data.devices : [];
  const deviceListData = deviceList.map(device => {
    return Object.keys(device).map(key => {
      if (key === "installationDate") {
        return new Date(device[key]).toDateString();
      } else {
        return device[key];
      }
    });
  });
  const [buttonType, setButtonType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setModalOpen(true);
    setButtonType("newDevice");
  }, []);

  const secrectKeyEl = useRef(null);
  const nameEl = useRef(null);
  const locationEl = useRef(null);
  const tdsWantedEl = useRef(null);
  const phWantedEl = useRef(null);
  const floodDurationEl = useRef(null);
  const ledDurationEl = useRef(null);
  const sensorIntervalEl = useRef(null);
  const floodIntervalEl = useRef(null);
  const ledIntervalEl = useRef(null);

  const handleCommandButtonClick = (type, event) => {
    setModalOpen(true);
    setButtonType(type);
    if (type === "editDevice" || type === "deleteDevice")
      console.log({ target: event.currentTarget.parentNode.parentNode.id });
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  const handleDeleteDeviceConfirm = () => {
    setModalOpen(false);
  };

  const submitNewDeviceHandler = event => {
    event.preventDefault();

    let secrectKey = secrectKeyEl.current.value;
    let name = nameEl.current.value;
    let location = locationEl.current.value;
    let tdsWanted = tdsWantedEl.current.value;
    let phWanted = phWantedEl.current.value;
    let floodDuration = floodDurationEl.current.value;
    let ledDuration = ledDurationEl.current.value;
    let sensorInterval = sensorIntervalEl.current.value;
    let floodInterval = floodIntervalEl.current.value;
    let ledInterval = ledIntervalEl.current.value;
  };

  const submitEditDeviceHandler = () => {};

  const titleText = buttonType => {
    switch (buttonType) {
      case "newDevice":
        return "New device";
      case "editDevice":
        return "Edit device";
      case "deleteDevice":
        return "Delete your device";
      default:
        return "";
    }
  };

  const confirmText = buttonType => {
    switch (buttonType) {
      case "newDevice":
        return "Add device";
      case "editDevice":
        return "Confirm";
      case "deleteDevice":
        return "Sure";
      default:
        return "";
    }
  };

  const modalContent = buttonType => {
    switch (buttonType) {
      case "newDevice":
        return (
          <form onSubmit={submitNewDeviceHandler}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Secret Key"
                  id="secrect-key"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Device Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Location"
                  id="location"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="TDS Wanted"
                  id="tdsWanted"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="pH Wanted"
                  id="phWanted"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Flood Duration"
                  id="floodDuration"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="LED Duration"
                  id="ledDuration"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Sensor Interval"
                  id="sensorInterval"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Flood Interval"
                  id="floodInterval"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="LED Interval"
                  id="ledInterval"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
          </form>
        );
      case "editDevice":
        return (
          <form onSubmit={submitEditDeviceHandler}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Secret Key"
                  id="secrect-key"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    disable: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Device Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Location"
                  id="location"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="TDS Wanted"
                  id="tdsWanted"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="pH Wanted"
                  id="phWanted"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Flood Duration"
                  id="floodDuration"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="LED Duration"
                  id="ledDuration"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Sensor Interval"
                  id="sensorInterval"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Flood Interval"
                  id="floodInterval"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="LED Interval"
                  id="ledInterval"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
          </form>
        );
      case "deleteDevice":
        return <h4>Are you sure that you want to delete this device!</h4>;
      default:
        return null;
    }
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Your Devices</h4>
            <p className={classes.cardCategoryWhite}>
              Manage the config of your devices
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.aboveTableWrapper}>
              <div className={classes.searchWrapper}>
                <CustomInput
                  formControlProps={{
                    className: classes.margin + " " + classes.search
                  }}
                  inputProps={{
                    placeholder: "Search device by name",
                    inputProps: {
                      "aria-label": "Search"
                    }
                  }}
                />
                <Button color="success" aria-label="edit" justIcon round>
                  <SearchIcon />
                </Button>
              </div>
              <Button
                color="success"
                round
                onClick={handleCommandButtonClick.bind(this, "newDevice")}
              >
                <AddIcon className={classes.newDeviceIcon} />
                <p className={classes.newDeviceText}>Add new device</p>
              </Button>
            </div>
            <Table
              handleEditClick={handleCommandButtonClick.bind(
                this,
                "editDevice"
              )}
              handleDeleteClick={handleCommandButtonClick.bind(
                this,
                "deleteDevice"
              )}
              tableHeaderColor="primary"
              tableHead={[
                "Name",
                "Installation Date",
                "Location",
                "TDS Wanted",
                "pH Wanted",
                "Flood Duration",
                "LED Duration",
                "Sensor Interval",
                "Flood Interval",
                "LED Interval"
              ]}
              tableData={deviceListData}
            />
          </CardBody>
        </Card>
      </GridItem>

      <Modal
        open={modalOpen}
        titleText={titleText(buttonType)}
        confirmText={confirmText(buttonType)}
        handleCancelClick={handleModalCancel}
        handleConfirmClick={handleDeleteDeviceConfirm}
      >
        {modalContent(buttonType)}
      </Modal>
    </GridContainer>
  );
};

export default DevicePage;
