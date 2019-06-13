import React from "react";
import useStyles from "./userProfileStyles";
// core components
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Button from "../../../components/CustomButton/CustomButton";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardAvatar from "../../../components/Card/CardAvatar";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";

const UserProfile = () => {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
            <p className={classes.cardCategoryWhite}>Complete your profile</p>
          </CardHeader>
          <CardBody>
            {/* <GridContainer> */}
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Email address"
                id="email-address"
                inputProps={{
                  disabled: true
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Phone Number"
                id="phone-number"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            {/* </GridContainer> */}
            {/* <GridContainer> */}
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="First Name"
                id="first-name"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Last Name"
                id="last-name"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Registration Date"
                id="registration-date"
                inputProps={{
                  disabled: true
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            {/* </GridContainer> */}
          </CardBody>
          <CardFooter>
            <Button color="primary">Update Profile</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={9}>
        <Card profile>
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              {/* <img src={avatar} alt="..." /> */}
            </a>
          </CardAvatar>
          <CardBody profile>
            <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
            <h4 className={classes.cardTitle}>Alec Thompson</h4>
            <p className={classes.description}>
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
            <Button color="primary" round>
              Follow
            </Button>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default UserProfile;
