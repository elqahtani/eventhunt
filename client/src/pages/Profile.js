import React from "react";
import EventList from "../organisms/EventList";
import Category from "../atoms/Category";

import {
  Row,
  Col,
} from "reactstrap";

// -----------------------------------------------------------------------------

const div1 = {
  fontWeight: "bold",
  fontSize: "16px",
  padding: "20px"
};

const div3 = {
fontFamily: "lato",
width: "80%",
fontSize: "16px",
marginRight: "100px"
};

const Profile = () => (
  <div style={div1}>
    <Row>
    <Col style={div3}><EventList /></Col>
    <Category />
    </Row>
  </div>
);

export default Profile;
