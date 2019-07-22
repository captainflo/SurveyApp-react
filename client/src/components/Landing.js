import React from "react";
import { Carousel } from "react-materialize";
import "./landing.css";

import NewYork from "./images/new-york.jpg";
import react from "./images/react.png";
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



const Landing = () => {
  return (
    <div>
      <div class="container-img">
        <img style={{ width: "100%" }} src={NewYork} alt={"NewYork"} />
        <div class="centered">
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
            <img style={{ width: "100%" }} src={react} alt={"React"} />
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
    </div>
  );
};

export default Landing;
