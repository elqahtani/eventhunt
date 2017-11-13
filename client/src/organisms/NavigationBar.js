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

import logo from "../static/logo.png";

// -----------------------------------------------------------------------------

const USER = {
  _id: 0,
  name: "Administrator"
};
const styleFootHead = {
  fontFamily: "lato",
  marginRight: "50px",
  fontSize: "150%",
  fontWeight: "bold",
  textAlign: "center",
  color: "#ffffff"
};

const styleBanner = {
  backgroundColor: "#1e88e5",
  padding: "0",
  color: "#ffffff",
  minHeight: "300px"
};

const styleText = {
  fontFamily: "lato",
  fontSize: "90%",
  marginTop: "20px",
  fontWeight: "bold",
  color: "#ffffff"
};

const styleText1 = {
  padding: "0",
  fontSize: "90%",
  marginTop: "20px"
};

const styleText2 = {
  fontFamily: "lato",
  display: "inline",
  float: "right",
  padding: "0",
  fontSize: "90%",
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
  fontSize: "90%",
  fontWeight: "bold",
  color: "#ffffff"
};

const styleText3 = {
  fontFamily: "lato",
  fontSize: "120%",
  textAlign: "center",
  marginTop: "120px",
  color: "#ffffff"
};

// -----------------------------------------------------------------------------

const Home = () => (
  <div style={styleBanner}>
    <Container>
      <Row>
        <Col xs={8} style={styleText1}>
          <NavLink to="/home" style={styleFootHead}>
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
          <Breadcrumb style={styleText2}>
            <BreadcrumbItem>
              {" "}
              <NavLink to="/welcome">SIGN IN</NavLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <NavLink to={`/post/${USER._id}`} style={styleText2}>
            Post Event
          </NavLink>
        </Col>
      </Row>
      <Row style={styleText3}>
        <Container>
          <h3>FIND & POST POPULAR EVENT</h3>
          <p>
            Find popular events that match your passion or share events nearby
          </p>
        </Container>
      </Row>
    </Container>
  </div>
);

export default Home;
