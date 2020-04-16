import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import team1 from "assets/img/faces/marina.jpeg";
//import team2 from "assets/img/faces/christian.jpg";
//import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card plain>
              <GridItem xs={12} sm={12} md={5} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>

              <small className={classes.smallTitle}>
                Marina, Full Stack Web Developer
              </small>
            </Card>
          </GridItem>
        </GridContainer>
        <div />
        <div id="progress">
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} style={{ width: '85%' }}>
              <div className={classes.title}>
                <h3>My Skill Set</h3>
              </div>
              <div>
                <p style={{ textAlign: 'justify' }}>React.js</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={75}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>JavaScript</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={82}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>Node.js</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={66}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>GraphQL</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={71}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>MySQL</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={81}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>HTML</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={78}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>CSS</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={73}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>MongoDB</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={66}
              />
              <div>
                <p style={{ textAlign: 'justify' }}>Web API</p>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={77}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
