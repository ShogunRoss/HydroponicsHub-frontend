import React, { useContext, useState } from "react";
import DevicesContext from "../../../context/devices-context";
import AuthContext from "../../../context/auth-context";
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
import NewDeviceForm from "./DeviceForm/NewDeviceForm";
import EditDeviceForm from "./DeviceForm/EditDeviceForm";

// import { useHttp } from "../../../hooks/http";
import { serverUrl } from "../../../config";

const DevicePage = () => {
  const classes = useStyles();
  const deviceContext = useContext(DevicesContext);
  const authContext = useContext(AuthContext);
  const deviceListData = deviceContext.data.map(device => {
    return device.info;
  });

  const [buttonType, setButtonType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  // const [forceRender, setForceRender] = useState(false);
  // useEffect(() => {}, [forceRender]);

  // const [isLoading, fetchedData] = useHttp(serverUrl, requestBody, [
  //   sendRequest
  // ]);
  // const deviceList = fetchedData ? fetchedData.data.devices : [];
  // const deviceListData = deviceList.map(device => {
  //   return Object.keys(device).map(key => {
  //     if (key === "createdAt") {
  //       return new Date(device[key]).toDateString();
  //     } else {
  //       return device[key];
  //     }
  //   });
  // });

  const handleCommandButtonClick = (type, event) => {
    setModalOpen(true);
    setButtonType(type);
    if (type === "editDevice" || type === "deleteDevice") {
      // console.log({ target: event.currentTarget.parentNode.parentNode.id });
      setSelectedDevice(parseInt(event.currentTarget.parentNode.parentNode.id));
    }
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  const handleDeleteDeviceConfirm = () => {
    // console.log(deviceContext.data[selectedDevice].secretKey);
    const requestDeleteBody = {
      query: `
        mutation RemoveDevice($secretKey: String!){
          removeDevice(secretKey: $secretKey) {
            email
          }
        }
      `,
      variables: {
        secretKey: deviceContext.data[selectedDevice].secretKey
      }
    };
    fetch(serverUrl, {
      method: "POST",
      body: JSON.stringify(requestDeleteBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authContext.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed to fetch.");
        }
        return res.json();
      })
      .then(() => {
        setModalOpen(false);
        deviceContext.fetchData();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const titleText = buttonType => {
    switch (buttonType) {
      case "newDevice":
        return "New device";
      case "editDevice":
        return `Edit ${deviceListData[selectedDevice] &&
          deviceListData[selectedDevice][0]}`;
      case "deleteDevice":
        return `Delete ${deviceListData[selectedDevice] &&
          deviceListData[selectedDevice][0]}`;
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
  const actionCallback = () => {
    setModalOpen(false);
    deviceContext.fetchData();
  };

  const modalContent = buttonType => {
    switch (buttonType) {
      case "newDevice":
        return (
          <NewDeviceForm callback={actionCallback} token={authContext.token} />
        );
      case "editDevice":
        return (
          <EditDeviceForm
            token={authContext.token}
            callback={actionCallback}
            data={deviceContext.data[selectedDevice]}
          />
        );
      case "deleteDevice":
        return (
          <h4>
            Are you sure that you want to delete{" "}
            {deviceListData[selectedDevice] &&
              deviceListData[selectedDevice][0]}
            ?
          </h4>
        );
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
                "Flood Interval",
                "Flood Duration",
                "Start Flood",
                "End Flood",
                "Start LED",
                "End LED"
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
        handleConfirmClick={
          buttonType === "deleteDevice" ? handleDeleteDeviceConfirm : null
        }
      >
        {modalContent(buttonType)}
      </Modal>
    </GridContainer>
  );
};

export default DevicePage;
