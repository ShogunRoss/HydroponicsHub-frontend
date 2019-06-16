import React, { useContext, useState } from "react";
import DevicesContext from "../../../context/devices-context";
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
            sensorInterval
            floodInterval
            ledInterval
            floodDuration
            ledDuration
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

  const handleCommandButtonClick = (type, event) => {
    setModalOpen(true);
    setButtonType(type);
    if (type === "editDevice" || type === "deleteDevice")
      console.log({ target: event.currentTarget.parentNode.parentNode.id });
  };

  const handleDeleteDeviceCancel = () => {
    setModalOpen(false);
  };

  const handleDeleteDeviceConfirm = () => {
    setModalOpen(false);
  };

  const submitHandler = () => {};

  const titleText = buttonType => {
    switch (buttonType) {
      case "newDevice":
        return "New device";
      case "editDevice":
        return "Edit your device's config";
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
          <form onSubmit={submitHandler}>
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
            </GridContainer>
          </form>
        );
      case "editDevice":
        return "Confirm";
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
                "Sensor Interval",
                "Flood Interval",
                "LED Interval",
                "Flood Duration",
                "LED Duration"
              ]}
              tableData={deviceListData}
            />
          </CardBody>
        </Card>
      </GridItem>
      {/* Delete Device Confirmation */}
      <Modal
        open={modalOpen}
        titleText={titleText(buttonType)}
        confirmText={confirmText(buttonType)}
        handleCancelClick={handleDeleteDeviceCancel}
        handleConfirmClick={handleDeleteDeviceConfirm}
      >
        {modalContent(buttonType)}
      </Modal>
    </GridContainer>
  );
};

export default DevicePage;
