import React from "react"
import { NavLink } from "react-router-dom"
import { Row, Col, Navbar, Button } from "reactstrap"

import Link from "../atoms/Link"

import logo from '../static/logo.png';


// -----------------------------------------------------------------------------

const USER = {
  _id: 0,
  name: "Administrator"
}

// -----------------------------------------------------------------------------

const Home = () => (
  // <nav
  //   style={{
  //     borderBottom: "1px solid green"
  //   }}
  // >
    <Row>
      <Col xs={8}>
      <img src={logo} className="App-icon"  alt="LOGO" />
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/answer">Answer</NavLink>
      </Col>

      <Col xs={4} className="navbar-inverse">
        <NavLink to={`/profile/${USER._id}`}>Profile</NavLink>
        <Button color="success" size="sm"> <NavLink to="/ask">Ask Question</NavLink> </Button>
      </Col>
    </Row>
)

export default Home