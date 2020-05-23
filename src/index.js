import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
//import LandingPage from "views/LandingPage/LandingPage.js";
//import ProfilePage from "views/ProfilePage/ProfilePage.js";
//import LoginPage from "views/LoginPage/LoginPage.js";
import SectionCompletedExamples from "views/Components/Sections/SectionCompletedExamples.js";
import WorkSection from "views/LandingPage/Sections/WorkSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";
import BlogPostsList from "views/BlogPage/BlogPostsList.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/blog" component={BlogPostsList} />
      <Route path="/about" component={SectionCompletedExamples} />
      <Route path="/contact" component={WorkSection} />
      <Route path="/skills" component={TeamSection} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
