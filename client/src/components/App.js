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
          className="pink darken-3"
        >
          <h5 className="white-text">Links</h5>
          <ul className="grey-text text-lighten-4">
            <li><a style={{color:'white'}} href="https://github.com/captainflo"><i className="fab fa-github"></i> Github</a></li>
            <li><a style={{color:'white'}} href="https://www.linkedin.com/in/florianlahitte/"><i className="fab fa-linkedin"></i> Linkedin</a></li>
            <li><a style={{color:'white'}} href="http://floweb.co/"><i className="fas fa-folder-open"></i> Portfolio</a></li>
          </ul>
        </Footer>
      </div>
    );
  }
}
export default connect(
  null,
  actions
)(App);
