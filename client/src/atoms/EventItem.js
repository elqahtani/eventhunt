import React, { Component } from "react";

import { Col, Card } from "reactstrap";

import IconMap from "../static/mapRED.png";
import IconDate from "../static/calendar.png";
import IconBookmark from "../static/bookmark.png";
import Contentimg1 from "../static/Fest.jpeg";

// ----------------CSS styling--------------------------------------------------
const styleIconMap = {
  width: "24px",
  marginRight: "10px"
};

const styleBox = {
  backgroundColor: "white",
  padding: "0",
  display: "inline-block",
  height: "280px",
  width: "780px"
};

const styleRow = {
  float: "left",
  fontFamily: "lato",
  marginLeft: "20px",
  marginTop: "20px",
  maxWidth: "440px"
};

const styleCol = {
  float: "left",
  fontFamily: "lato",
  marginLeft: "0",
  marginTop: "20px",
  maxWidth: "40px"
};

const styleImg = {
  float: "left",
  margin: "0",
  height: "280px",
  width: "250px"
};

const Text1 = {
  float: "left",
  fontSize: "16px",
  marginBottom: "30px"
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
  marginBottom: "10px"
};

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.event
    };
  }
  render() {
    console.log(this.props.event);

    const event = this.state.event;
    return (
      <Card style={styleBox}>
        <img src={Contentimg1} alt="Fest 1" style={styleImg} />
        <div style={styleRow}>
          <Col style={Text1}>{event.title}</Col>
          <Col style={Text2}>
            Posted by <span style={Text3}> {event.createdBy.name}</span>
            {/*via <span style={Text3}>Eventbrite</span>*/}
          </Col>
          <Col style={Text4}>
            <img src={IconMap} alt="map" style={styleIconMap} />
            {event.location}
          </Col>
          <Col style={Text4}>
            <img src={IconDate} alt="date" style={styleIconMap} />
            {event.date}
          </Col>
          <Col>
            {/*<Button style={styleButton}>Techtalk</Button>
                <Button style={styleButton}>Workshop</Button>*/}
          </Col>
        </div>
        <Col style={styleCol}>
          <img src={IconBookmark} alt="bookmark" style={styleIconMap} />
        </Col>
      </Card>
    );
  }
}

export default EventItem;
