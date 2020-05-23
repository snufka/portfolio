import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import WorkSection from "views/LandingPage/Sections/WorkSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";
import SectionExamples from "./Sections/SectionExamples.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Marina Mitrashov"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/galaxy.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Hello, I{"'"}m Marina.</h1>
                <h3 className={classes.subtitle}>
                  And I am a Fullstack web developer at the begining of her journey.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCompletedExamples />
        <TeamSection />
        <SectionExamples />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
