import React from "react";
import axios from "axios";
import EventList from "../organisms/EventList";
import Category from "../atoms/Category";

import { Row, Col } from "reactstrap";

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
  marginRight: "40px"
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentWillMount() {
    this.getEvents();
  }

  getEvents() {
    axios
      .request({
        method: "get",
        url: process.env.REACT_APP_API_URL + "/api/events"
      })
      .then(response => {
        console.log(response.data);
        this.setState({ events: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const Home = this.state.event
    return (
      <div style={div1}>
        <Row>
          <Col style={div3}>
            <EventList events={this.state.events} />
          </Col>
          <Category />
        </Row>
      </div>
    );
  }
}
