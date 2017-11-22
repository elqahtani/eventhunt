import React from "react";
import { Row, Col, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import SignIn from "../atoms/SignIn";
import PostButton from "../atoms/PostButton";
import Dropdown from "../atoms/Dropdown";
import Banner from "../atoms/Banner";
import BannerProfile from "../atoms/BannerProfile";
import BackgroundImg from "../static/bgheader.png";
import helpers from "../helpers";
// import logo from "../static/logo.png";

// -----------------------------------------------------------------------------

const userToken = helpers.decodeToken();

const USER = {
  _id: 0,
  name: "Administrator"
};
const styleFootHead = {
  fontFamily: "lato",
  marginRight: "50px",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#ffffff"
};

const styleBanner = {
  backgroundImage: `url(${BackgroundImg})`,
  padding: "0",
  color: "#ffffff",
  minHeight: "500px"
};

const styleText1 = {
  padding: "0",
  fontSize: "13px",
  marginTop: "20px"
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
  margin: "0 auto",
  float: "right",
  width: "100%"
};

const styleText5 = {
  fontFamily: "lato",
  display: "inline",
  fontWeight: "bold",
  float: "right",
  padding: "0",
  fontSize: "13px",
  marginTop: "23px",
  marginRight: "30px",
  color: "#ffffff"
};

const styleText6 = {
  display: "inline",
  float: "right",
  marginTop: "0px",
  marginRight: "30px",
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
          {!userToken && <SignIn />}
          {userToken && (
            <div style={styleText3}>
              <Dropdown />
              <PostButton />
            </div>
          )}
        </Col>
      </Row>
      <Banner />
      <Row />
    </Container>
  </div>
);

export default Home;
