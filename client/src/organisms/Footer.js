import React from "react"
import {Button, Container, Row, Col } from 'reactstrap';
import IconF from "../static/iconF.png";
import IconT from "../static/twitter.png";
import IconL from "../static/linkedin.png";
import IconI from "../static/instagram.png";
import IconG from "../static/gplus.png";
import IconCall from "../static/call.png";
import IconMail from "../static/mail.png";
import IconMap from "../static/map.png";


// -----------------------------------------------------------------------------

const styleFoot = {
  background: "linear-gradient(to right, #6444de 0%, #3b73db  100%)",
  minHeight: "400px"
}

const styleFoot2 = {
  marginTop: "20px",
  marginBottom: "20px",
  fontFamily: "lato",
  fontSize: "13px",
  color: "#616161"
}

const styleFoot3 = {
  fontFamily: "lato",
  fontSize: "13px",
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
  fontSize: "13px",
  width: "200px"
}

const styleIcon = {
  width: "6%",
  marginRight: "20px",
  float: "right"
}


const styleIconCall = {
  width: "24px",
  marginRight: "20px"
}

const styleIconMail = {
  width: "24px",
  marginRight: "22px",
  marginLeft: "35px"
}

const styleIconMap = {
  width: "24px",
  marginRight: "22px",
  marginLeft: "35px"
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
            <p style={styleFoot3}>Jl. Kartini No.7, Terban, Gondokusuman,Kota Yogyakarta, Daerah Istimewa Yogyakarta, Indonesia 55223</p>
          </Col>
          <Col xs="4" style={styleCol}>
            <h5>OUR CONTACT</h5>
            <Button style={styleButton} > <img src={IconCall} alt="call" style={styleIconCall}/> (0274) 556565</Button>
            <br/>
            <br/>
            <p style={styleFoot3}> <img src={IconMail} alt="mail" style={styleIconMail}/>  halo@eventhunt.co</p>
            <p style={styleFoot3}> <img src={IconMap} alt="map" style={styleIconMap}/>   Open in Maps</p>
          </Col>
        </Row>
    </Container>
  </div>
  <div style={styleFoot2}>
    <Container>
      <Row >
        <Col xs="4">Copyright &copy;2017. EventHunt Development Team.</Col>
        <Col xs="3" />
        <Col sm="4">
          <a href=""><img src={IconT} alt="twitter" style={styleIcon}/></a>
          <a href=""><img src={IconF} alt="facebook" style={styleIcon}/></a>
          <a href=""><img src={IconL} alt="linkedin" style={styleIcon}/></a>
          <a href=""><img src={IconI} alt="instagram" style={styleIcon}/></a>
          <a href=""><img src={IconG} alt="google +" style={styleIcon}/></a>
        </Col>
      </Row>
    </Container>
  </div>
</div>
)

export default Footer
