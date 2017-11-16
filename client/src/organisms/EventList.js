import React from "react";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";

import IconMap from "../static/map.png";
import Contentimg1 from "../static/Fest.jpeg";

// -----------------------------------------------------------------------------

const styleIconMap = {
  width: "24px",
  marginRight: "22px",
  marginLeft: "35px"
}

const div1 = {
  margin: "0",
  padding: "0"
};

const styleBox = {
  backgroundColor: "white",
  padding: "0",
  display: "inline-block"
}

const Text1 = {
  float: "left",
  fontSize: "13px",
  fontWeight: "normal",
  margin:"0",
  width:"200px"
};

const Text2 = {
  float: "left",
  fontFamily: "lato",
  padding: "20px",
  fontSize: "16px",
  color: "grey"
};

const Text3 = {
  fontWeight: "bold",
  fontSize: "16px",
  float: "left",
  padding: "20px"
};

const Events = () => (
  <div style={div1}>
      <Row >
        <Col sm={{ size: 'auto', offset: 1 }}>
        <h5 style={Text3}>We found match events</h5>
        <p style={Text2}>Seminar & traning</p>
        <p style={Text2}>Yogyakarta</p>
        </Col>
      </Row>
      <Row>
        <Col><p style={div1}>TODAY ()</p></Col>
        <Col><span style={div1}><hr/></span></Col>
      </Row>
      <Row>
        <Container style={styleBox}>
          <Col style={div1}><img src={Contentimg1} alt="Fest 1" style={Text1}/></Col>
          <Col>
            <Row style={Text1}>
              <p>Jazz Gunung 2017</p>
              <p>East Java, Indonesia</p>
            </Row>
            <Row style={Text1}>
              <p>Posted by   <span></span> via <span></span></p>
              <p>East Java, Indonesia</p>
            </Row>
            <Row style={Text1}>
              <p>Posted by   <span></span> via <span></span></p>
            </Row>
            <Row>
              <p style={Text1}> <img src={IconMap} alt="map" style={styleIconMap}/>   Open in Maps</p>
            </Row>
          </Col>
        </Container>
      </Row>


  </div>
);

export default Events;
