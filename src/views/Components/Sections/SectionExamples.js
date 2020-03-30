import React from "react";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
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
            <a href="https://github.com/snufka/E_Commerce" className={classes.link}>
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
                Ecommerce Website
              </Button>
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <a href="https://snufka.github.io/LastMinuteTrip/" className={classes.link}>
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
                Last Minute Trip
              </Button>
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <a href="https://herstory.netlify.com/" className={classes.link}>
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
                Her Story Progressive Web App
              </Button>
            </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
