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

const div2 = {
  margin: "5px",
  padding: "5px"
};

const div3 = {
  width: "80%",
  float: "right"
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

const Eventlist = () => (
  <div style={div1}>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <h5 style={Text3}>We found match events</h5>
          <p style={Text2}>Seminar & traning</p>
          <p style={Text2}>Yogyakarta</p>
        </Col>
      </Row>
      <Row>
        <Col><p style={div1}>TODAY () <span style={div3}><hr/></span></p></Col>
      </Row>
      <Row>
        <Container style={styleBox}>
           <img src={Contentimg1} alt="Fest 1" style={Text1}/>

                <Row style={Text1}>
                  <p style={Text1}>Jazz Gunung 2017</p>
                  <p>Posted by   <span style={Text1}></span> via <span style={Text1}></span></p>
                  <p>East Java, Indonesia</p>

                  <p>East Java, Indonesia</p>
                  <p>Posted by   <span></span> via <span></span></p>
                  <p style={Text1}> <img src={IconMap} alt="map" style={styleIconMap}/>   Open in Maps</p>
                </Row>

        </Container>
      </Row>
  </div>
);

export default Eventlist;
