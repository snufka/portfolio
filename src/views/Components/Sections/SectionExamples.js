import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

//import landing from "assets/img/landing.jpg";
//import profile from "assets/img/profile.jpg";
import ecom from "assets/img/ecom.jpg";
import herstory from "assets/img/herstory.PNG";
import lastmin from "assets/img/lastmin.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div>
          <h3>Some Projects I Have Been Working On</h3>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={5}>
            <Link to="landing-page" className={classes.link}>
              <img
                src={ecom}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View Ecommers Website builed with Node & MongoDB
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={lastmin}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View Last Minute Trip
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <Link to="profile-page" className={classes.link}>
              <img
                src={herstory}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                View Her Story Progressive Web App
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
