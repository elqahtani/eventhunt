import React from "react"
import {Button, Container, Row, Col } from 'reactstrap';

// -----------------------------------------------------------------------------

const styleFoot = {
  backgroundColor: "#1e88e5"
}

const styleFoot2 = {
  margin: "20px",
  fontFamily: "lato",
  fontSize: "80%",
  color: "#616161",
}

const style = {
  marginTop: "20px",
  fontFamily: "lato",
  color: "#ffffff",
  fontSize: "80%"
  }

const styleFootHead = {
  margin: "auto",
  fontFamily:"lato",
  fontWeight: "bold",
  textAlign: "center",
  borderBottom: "solid #1DE9B6 ",
  color: "#ffffff"
}

// -----------------------------------------------------------------------------

const Footer = () => (
<div>
  <div style={styleFoot}>
    <Container style={style}>
        <br/>
        <Row>
          <h3 style={styleFootHead}>EVENTHUNT</h3>
        </Row>
        <Row><br/></Row>
        <br/>
        <Row>
          <Col>
            <h5 >OUR STORY</h5>
            <p>
            Our Stories are collections of Snaps submitted from different Snapchatters throughout the community,
            collected and categorized to capture a place or event from different points-of-view
            </p>
          </Col>
          <Col>
            <h5>OUR OFFICE</h5>
            <p>Jogja Digital Valey</p>
            <p>Jl. Kartini No.7, Terban, Gondokusuman,</p>
            <p>Kota Yogyakarta,</p>
            <p> Daerah Istimewa Yogyakarta 55223</p>
          </Col>
          <Col>
            <h5>OUR CONTACT</h5>
            <Button color="warning">&#128222; (0274) 556565</Button>
            <br/>
            <br/>
            <p> &#128232;  halo@eventhunt.co</p>
            <p> &#10143;   Open in Maps</p>
          </Col>
        </Row>
    </Container>
  </div>
  <div style={styleFoot2}>
    <Container>
      <Row >
        <Col>Copyright &copy;2017. EventHunt Development Team.</Col>
        <Col> </Col>
        <Col sm="4">
        <i>&copy;</i>
        <i>&copy;</i>
        <i>&copy;</i>
        <i>&copy;</i>
        </Col>
      </Row>
    </Container>
  </div>
</div>
)

export default Footer
