import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
//const emailLink = "mailto:mariname86@gmail.com?subject=I came a cross your website";
const buttonText = { color: "white" };

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8} style={{ width: '85%' }}>
          <h2 className={classes.title}>Let{"'"}s Stay in Touch</h2>
          <h4 className={classes.description}>
            Would love to hear your thoughts and feedback. Do not hesitate to ping me.
          </h4>
          <form>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="info"><a href="https://aemail.com/DkBA" target="_blank" rel="noopener noreferrer" style={buttonText}>Send Message</a></Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div >
  );
}
