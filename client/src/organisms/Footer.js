import React from "react"
import {Button, Container, Row, Col } from 'reactstrap';
import IconF from "../static/iconF.png";
import IconT from "../static/twitter.png";
import IconL from "../static/linkedin.png";
import IconI from "../static/instagram.png";

// -----------------------------------------------------------------------------

const styleFoot = {
  background: "linear-gradient(to right, #6444de 0%, #3b73db  100%)",
  minHeight: "400px"
}

const styleFoot2 = {
  margin: "20px",
  fontFamily: "lato",
  fontSize: "13px",
  fontSize: "80%",
  color: "#616161",
}

const styleFoot3 = {
  fontFamily: "lato",
  fontSize: "13px",
  fontSize: "80%",
  color: "#ffffff",
}

const style = {
  marginTop: "20px",
  fontFamily: "lato",
  color: "#ffffff",
  fontSize: "16px",
}

const styleCol = {
  padding: "50px"
}

const styleFootHead = {
  margin: "auto",
  padding: "14px",
  fontFamily:"lato",
  fontWeight: "bold",
  textAlign: "center",
  borderBottom: "solid #1DE9B6 ",
  color: "#ffffff"
}

const styleButton = {
  backgroundColor: "#ffa406",
  fontSize: "13px"
}

const styleIcon = {
  width: "6%",
  marginRight: "20px"
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

          <Col xs="4" style={styleCol}>
            <h5 >OUR STORY</h5>
            <p style={styleFoot3}>
            Our Stories are collections of Snaps submitted from different Snapchatters throughout the community,
            collected and categorized to capture a place or event from different points-of-view
            </p>
          </Col>
          <Col xs="4" style={styleCol}>
            <h5>OUR OFFICE</h5>
            <p style={styleFoot3}>Jogja Digital Valey</p>
            <p style={styleFoot3}>Jl. Kartini No.7, Terban, Gondokusuman,</p>
            <p style={styleFoot3}>Kota Yogyakarta,</p>
            <p style={styleFoot3}> Daerah Istimewa Yogyakarta 55223</p>
          </Col>
          <Col xs="4" style={styleCol}>
            <h5>OUR CONTACT</h5>
            <Button style={styleButton} > &#128222; (0274) 556565</Button>
            <br/>
            <br/>
            <p style={styleFoot3}> &#128232;  halo@eventhunt.co</p>
            <p style={styleFoot3}> &#10143;   Open in Maps</p>
          </Col>
        </Row>
    </Container>
  </div>
  <div style={styleFoot2}>
    <Container>
      <Row >
        <Col xs="4">Copyright &copy;2017. EventHunt Development Team.</Col>
        <Col xs="4" />
        <Col sm="4">
          <a href=""><img src={IconF} alt="facebook" style={styleIcon}/></a>
          <a href=""><img src={IconT} alt="twitter" style={styleIcon}/></a>
          <a href=""><img src={IconL} alt="linkedin" style={styleIcon}/></a>
          <a href=""><img src={IconI} alt="instagram" style={styleIcon}/></a>
        </Col>
      </Row>
    </Container>
  </div>
</div>
)

export default Footer
