import React from "react";
import PropTypes from "prop-types";
import { Modal } from "@material-ui/core";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import Button from "../CustomButton/CustomButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import useStyles from "./customModalStyles";

const CommonModal = props => {
  const {
    open,
    confirmDisable,
    titleText,
    confirmText,
    handleCancelClick,
    handleConfirmClick
  } = props;

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={open}
      disableBackdropClick
    >
      <Card className={classes.paper}>
        <CardHeader id="modal-title" color="primary">
          <h3 className={classes.cardTitleWhite}>{titleText}</h3>
          {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
        </CardHeader>

        <CardBody id="modal-content" className={classes.content}>
          {props.children}
        </CardBody>

        <CardFooter id="modal-action" className={classes.action}>
          <Button
            id="cancel-button"
            color="danger"
            marginRight
            onClick={handleCancelClick}
          >
            <CloseIcon /> Cancel
          </Button>
          <Button
            id="confirm-button"
            type="submit"
            disabled={confirmDisable}
            color="success"
            onClick={handleConfirmClick}
          >
            <CheckIcon /> {confirmText}
          </Button>
        </CardFooter>
      </Card>
    </Modal>
  );
};

CommonModal.propTypes = {
  // classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  confirmDisable: PropTypes.bool,
  titleText: PropTypes.string,
  confirmText: PropTypes.string,

  handleCancelClick: PropTypes.func,
  handleConfirmClick: PropTypes.func
};

export default CommonModal;
