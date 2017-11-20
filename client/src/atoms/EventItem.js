import React, {Component} from "react";

import {
  Row,
  Col,
  Card,
  Button,
} from "reactstrap";

import IconMap from "../static/mapRED.png";
import IconDate from "../static/calendar.png";
import IconBookmark from "../static/bookmark.png";
import Contentimg1 from "../static/Fest.jpeg";

// -----------------------------------------------------------------------------

const styleIconMap = {
  width: "24px",
  marginRight: "10px",
}

const div1 = {
  margin: "0",
  padding: "0"
};

const div3 = {
  width: "80%",
  float: "right"
};

const styleBox = {
  backgroundColor: "white",
  padding: "0",
  display: "inline-block",
  height: "280px",
  width:"780px"
}

const styleRow = {
  float: "left",
  fontFamily: "lato",
  marginLeft:"20px",
  marginTop: "20px",
  maxWidth: "440px"
};

const styleCol = {
  float: "left",
  fontFamily: "lato",
  marginLeft:"0",
  marginTop: "20px",
  maxWidth: "40px"
};

const styleImg = {
  float: "left",
  margin:"0",
  height: "280px",
  width:"250px"
};

const Text1 = {
  float: "left",
  fontSize: "16px",
  marginBottom: "30px",
};

const Text2 = {
  float: "left",
  marginBottom: "20px",
  fontWeight: "normal",
  fontSize: "13px",
  color: "grey"
};

const Text3 = {
  fontWeight: "bold",
  fontSize: "13px",
  color: "black"
};

const Text4 = {
  float: "left",
  color: "grey",
  fontSize: "13px",
  marginBottom: "10px",
};

const Text5 = {
  float: "left",
  color: "black",
  fontWeight: "bold",
  marginRight: "10px",
  fontSize: "13px",
};

const Text6 = {
  float: "left",
  marginRight: "10px",
  color: "grey",
  fontSize: "13px",
};

const styleButton = {
  backgroundColor: "#f5f5f5",
  marginRight: "5px",
  fontSize: "13px",
  color: "grey",
  borderRadius: "15px",
  padding: "4px",
  width: "20%",
};

class EventItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: props.event
    }
  }
  render(){
    console.log(this.props.event);
    return(
        <Card style={styleBox}>
          <img src={Contentimg1} alt="Fest 1" style={styleImg}/>
            <div style={styleRow}>
              <Col style={Text1}>Topcoder 2017 - Design Event Regional Indonesia</Col>
              <Col style={Text2}>Posted by   <span style={Text3}> Laila Azizah</span> via <span style={Text3}>Eventbrite</span></Col>
              <Col style={Text4}> <img src={IconMap} alt="map" style={styleIconMap}/>Ambarukmo Hotel Jln. Laksda Adisucipto, Yogyakarta</Col>
              <Col style={Text4}> <img src={IconDate} alt="date" style={styleIconMap}/>Thursday, 09 November 2017 - 18:30 </Col>
              <Col>
                <Button style={styleButton}>Techtalk</Button>
                <Button style={styleButton}>Workshop</Button>
              </Col>
            </div>
          <Col style={styleCol}> <img src={IconBookmark} alt="bookmark" style={styleIconMap}/></Col>
        </Card>
    )
  }
}

export default EventItem;
