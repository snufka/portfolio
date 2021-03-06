import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

//import profile from "assets/img/faces/christian.jpg";
import styles from "assets/jss/material-kit-react/views/components.js";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

export default function BlogPostsList(props) {
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                brand="Marina Mitrashov"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer >
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Blog Posts</h1>
                                <h3 className={classes.subtitle}>
                                    Some thoughts about Code, Life and The Univers </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h2>some posts</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}
