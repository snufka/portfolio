import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import classNames from "classnames";
//import profile from "assets/img/faces/marina.jpeg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Thank You for Stopping by</h2>
            <h4>
              My name is Marina Mitrashov and I am a Marketing Automation Manager with a background
              in Digital Marketing and SEO.
              Recognized as proactive, resourceful, and persistent problem-solver.
              Excellent communicator with effective client relationship building skills.
              Graduate of Full Stack Development through ESMT Berlin.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
