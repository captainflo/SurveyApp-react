import React from "react";
import { Carousel } from "react-materialize";
import "./landing.css";
import { Footer } from "react-materialize";

import NewYork from "./images/new-york.jpg";
import reactlogo from "./images/react.png";
import github from "./images/github.png";
import googleauth from "./images/google-authenticator.png";
import heroku from "./images/heroku.png";
import html from "./images/html.png";
import materialize from "./images/materialize.png";
import mongodb from "./images/mongodb-logo.png";
import node from "./images/node.png";
import redux from "./images/redux.png";
import sendgrid from "./images/sengrid.png";
import stripe from "./images/stripe.png";
import Logo from "./images/logo.png";



const Landing = () => {
  return (
    <div>
      <div className="container-img">
        <img style={{ width: "100%" }} src={NewYork} alt={"NewYork"} />
        <div className="centered">
        <img  className="hide-on-med-and-down" style={{ width: "10%" }} src={Logo} alt={"logo"} />
          <h5>
            Helps your customers to give reviews and provide valuable feedback
            via emails.
          </h5>
        </div>
      </div>
      <h4 className="center" style={{ marginBottom: "-30px" }}>Technologies used it</h4>
      <Carousel
        images={[
          <div>
            <img style={{ width: "100%" }} src={reactlogo} alt={"reactlogo"} />
            <p className="center">React</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={redux} alt={"React"} />
            <p className="center">Redux</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={node} alt={"React"} />
            <p className="center">Node</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={mongodb} alt={"React"} />
            <p className="center">Mongodb / Mongoose</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={html} alt={"React"} />
            <p className="center">HTML / CSS / JS</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={materialize} alt={"React"} />
            <p className="center">Materialize</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={googleauth} alt={"React"} />
            <p className="center">Google Autth</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={sendgrid} alt={"React"} />
            <p className="center">SendGrid</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={stripe} alt={"React"} />
            <p className="center">Stripe</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={heroku} alt={"React"} />
            <p className="center">Heroku</p>
          </div>,
          <div>
            <img style={{ width: "100%" }} src={github} alt={"React"} />
            <p className="center">GitHub</p>
          </div>
        ]}
        options={ {padding: 200}}
      />
      <Footer
          copyrights="Florian Lahitte 2019 Copyright Text"
          className="pink darken-3 " 
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
};

export default Landing;
