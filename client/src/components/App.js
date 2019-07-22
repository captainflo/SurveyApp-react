import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import M from "materialize-css/dist/js/materialize.min.js";
import { Footer } from "react-materialize";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashbord";
import SurveyNew from "./surveys/surveyNew";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    // Sidebar
    const elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
        <Footer
          copyrights="Florian Lahitte 2019 Copyright Text"
          moreLinks={<a />}
          links={<ul />}
          className="pink darken-3"
        >
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </Footer>
      </div>
    );
  }
}
export default connect(
  null,
  actions
)(App);
