import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import M from "materialize-css/dist/js/materialize.min.js";

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
      <div style={{fontFamily: 'Montserrat'}}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(
  null,
  actions
)(App);
