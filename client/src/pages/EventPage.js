import React from "react";
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";

import Category from "../atoms/Category";

// STYLING_CSS ---------------------------------------------------

const styleText = {
  fontFamily: "lato",
  width: "80%",
  fontSize: "16px",
  marginRight: "100px"
};

// COLUMN_SINGLEEVENT

const ColumnEvent = () => {
  return (
    <Card style={styleText}>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>

        <CardTitle>Tournament Golf 2018 for Celebrating Pancasila Day </CardTitle>
        <CardSubtitle>Fun Game & Sport </CardSubtitle>
        <br />
        <CardText>
          In honor to celebrating Pancasila’s Day 2018, Bizcom Indonesia proudly
          present the Golf Tournament. This event is held in a form of exclusive
          networking activity. The vision of the event is the commemorating the
          Pancasila as Indonesia, most honored values and symbol. Soekarno said,
          ‘Bangsa yang besar adalah bangsa yang tidak pernah meninggalkan sejarah’
          reflected in our vision to be held this event.
        </CardText>
        <br />
        <CardSubtitle> DATE AND TIME  </CardSubtitle>
        <CardText> Thu, May 31, 2018
        <br />
        5:00 AM – 3:00 PM WIB </CardText>

        <CardSubtitle> Location</CardSubtitle>
        <CardText> Senayan
        Kebayoran Baru, Jakarta </CardText>
      </CardBody>
    </Card>
  );
}

// SINGLE

const Single = () => (
  <Container>
    <Row className="center" id="row-auth">
      <Col>

        <ColumnEvent />
      </Col>
      <Category />
    </Row>
  </Container>
);

export default Single;
