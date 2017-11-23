import React from "react";
import axios from "axios";
import IconMap from "../static/mapRED.png";
import IconDate from "../static/calendar.png";
import IconBookmark from "../static/bookmark.png";

import {
  Button,
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

// ----------------CSS styling--------------------------------------------------
const styleIconMap = {
  width: "24px",
  marginRight: "10px"
};

const styleButton = {
  fontFamily: "lato",
  marginRight: "20px",
  color: "#bdbdbd",
  backgroundColor: "#f5f5f5",
  borderRadius: "40px",
  padding: "2px 10px 2px 10px"
};
const styleBox = {
  backgroundColor: "white",
  padding: "0",
  display: "inline-block",
  height: "260px",
  width: "780px"
};

const styleRow = {
  float: "left",
  fontFamily: "lato",
  padding: "0",
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

const styleBook = {
  float: "right",
  marginTop: "420px",
  maxWidth: "40px",
  position: "absolute",
  top: "20px",
  right: "20px"
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
  color: "black",
  marginRight: "7px"
};

const Text4 = {
  float: "left",
  color: "grey",
  fontSize: "13px",
  marginBottom: "10px"
};

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
            <Col style={styleBook}>
              <img src={IconBookmark} alt="bookmark" style={styleIconMap} />
            </Col>
            <CardSubtitle> DATE AND TIME : </CardSubtitle>
            <br />
            <CardText>
              <Col style={Text4}>
                <img src={IconMap} alt="map" style={styleIconMap} />
                {event.location}
              </Col>
              <Col style={Text4}>
                <img src={IconDate} alt="date" style={styleIconMap} />
                {event.date}
              </Col>
              <Col>
                <Button style={styleButton}>Techtalk</Button>
                <Button style={styleButton}>Workshop</Button>
              </Col>
            </CardText>

            <CardText>{event.description}</CardText>
            <br />
          </CardBody>
        </Card>
      </Container>
    );
  }
}
