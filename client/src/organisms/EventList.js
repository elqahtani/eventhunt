import React, { Component } from "react";
import EventItem from "../atoms/EventItem";

import { Row, Col } from "reactstrap";

const div1 = {
  margin: "0",
  padding: "0"
};

const styleToday = {
  margin: "0",
  padding: "0",
  marginBottom: "20px"
};

const styleRowToday = {
  margin: "0",
  padding: "0"
};

const div3 = {
  width: "80%",
  float: "right"
};

const Text5 = {
  float: "left",
  color: "grey",
  fontWeight: "bold",
  marginRight: "10px",
  fontSize: "13px"
};

const Text6 = {
  float: "left",
  marginRight: "10px",
  color: "#bdbdbd",
  fontSize: "13px"
};

// -----------------------------------------------------------------------------

class Eventlist extends Component {
  render() {
    return (
      <div>
        <div style={div1}>
          <Row style={styleRowToday}>
            <Col style={styleToday}>
              <p style={Text5}>We found match events</p>
              <p style={Text6}>Seminar & traning</p>
              <p style={Text6}>Yogyakarta</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={styleToday}>TODAY </p>
            </Col>
          </Row>
        </div>
        <div>
          {this.props.events.map(event => {
            return <EventItem key={event._id} event={event} />;
          })}
        </div>
      </div>
    );
  }
}

export default Eventlist;
