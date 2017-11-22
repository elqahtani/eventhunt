import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from "reactstrap";

// STYLING_CSS ---------------------------------------------------

const styleContainer = {
  marginTop: "30px"
};
const styleText = {
  fontFamily: "lato",
  width: "80%",
  fontSize: "16px",
  marginRight: "100px"
};

const styleImg = {
  margin: "0"
};
// SINGLE

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// Coba ---------------------------------------------------
export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }

  componentWillMount() {
    const id = Number(this.props.match.params.id);

    axios
      .get(`/api/events/${id}`)
      .then(response => {
        this.setState({
          event: response.data
        });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  render() {
    const event = this.state.event;
    console.log(event);
    return (
      <Container style={styleContainer}>
        <Card style={styleText}>
          <img
            src={event.imageDescription}
            alt="Card image cap"
            style={styleImg}
          />
          <CardBody>
            <CardTitle>{event.title}</CardTitle>
            <br />
            <CardSubtitle> DATE AND TIME </CardSubtitle>
            <br />
            <CardSubtitle> {event.location}</CardSubtitle>
            <br />
            <CardText>
              {event.date} <br />
              {event.time}
            </CardText>
            <CardText>{event.description}</CardText>
            <br />
          </CardBody>
        </Card>
      </Container>
    );
  }
}
