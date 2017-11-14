import React from "react";
import { NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Navbar,
  Button,
  Container,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

import Link from "../atoms/Link";
import BackgroundImg from "../static/bgheader.png";
// import logo from "../static/logo.png";

// -----------------------------------------------------------------------------

const USER = {
  _id: 0,
  name: "Administrator"
};
const styleFootHead = {
  fontFamily: "lato",
  marginRight: "50px",
  fontSize: "13px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#ffffff"
};

const styleBanner = {
  backgroundImage: `url(${BackgroundImg})`,
  padding: "0",
  color: "#ffffff",
  minHeight: "400px"
};

const styleText = {
  fontFamily: "lato",
  fontSize: "13px",
  marginTop: "20px",
  fontWeight: "bold",
  color: "#ffffff"
};

const styleText1 = {
  padding: "0",
  fontSize: "13px",
  marginTop: "20px"
};

const styleText2 = {
  fontFamily: "lato",
  display: "inline",
  float: "right",
  padding: "0",
  fontSize: "13px",
  marginTop: "20px",
  marginRight: "30px",
  fontWeight: "bold",
  color: "#ffffff"
};

const styleText2A = {
  fontFamily: "lato",
  marginTop: "20px",
  marginRight: "30px",
  padding: "0",
  fontSize: "13px",
  color: "#ffffff"
};

const styleText3 = {
  fontFamily: "lato",
  fontSize: "36px",
  textAlign: "center",
  marginBottom: "0",
  color: "#ffffff"
};

const styleText4 = {
  fontFamily: "lato",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "60px",
  color: "#ffffff"
};

const styleText5 = {
  fontFamily: "lato",
  display: "inline",
  fontWeight: "bold",
  float: "right",
  padding: "0",
  fontSize: "13px",
  marginTop: "20px",
  marginRight: "30px",
  color: "#ffffff"
};

const styleText6 = {
  backgroundColor: "#1DE9B6",
  display: "inline",
  float: "right",
  padding: "3px",
  marginTop: "15px",
  marginRight: "30px"
};
const styleText7 = {
  fontFamily: "lato",
  fontWeight: "bold",
  fontSize: "13px",
  color: "#ffffff"
};

// -----------------------------------------------------------------------------

const Home = () => (
  <div style={styleBanner}>
    <Container>
      <Row>
        <Col xs={8} style={styleText1}>
          <NavLink to="/" style={styleFootHead}>
            {" "}
            EVENTHUNT
          </NavLink>
          <NavLink exact to="/" style={styleText2A}>
            Home
          </NavLink>
          <NavLink to="/popular" style={styleText2A}>
            Popular Event
          </NavLink>
          <NavLink exact to="/FAQ" style={styleText2A}>
            FAQ
          </NavLink>
        </Col>

        <Col xs={4} className="navbar-inverse">
          <Breadcrumb style={styleText6}>
            <BreadcrumbItem>
              {" "}
              <NavLink to="/welcome" style={styleText7}>SIGN IN</NavLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <NavLink to={`/post/${USER._id}`} style={styleText5}>
            POST EVENT
          </NavLink>
        </Col>
      </Row>
      <Row >
        <Container>
          <h3 style={styleText4}>FIND & POST POPULAR EVENT</h3>
          <p style={styleText3}>
            Find popular events that match your passion
          </p>
          <p style={styleText3}>
           or share events nearby
          </p>
        </Container>
      </Row>
    </Container>
  </div>
);

export default Home;
