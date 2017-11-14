import React from "react";
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";

// STYLING_CSS ---------------------------------------------------

const styleForm = {
  width: "50%",
  height: "650px"
};

const styleButton = {
  width: "100%",
  bottom: "0"
};

const styleText = {
  fontFamily: "lato",
  width: "60%",
  fontSize: "16px",
  marginRight: "100px"
};

const styleHeader = {
  fontFamily: "lato",
  fontSize: "16px",
  margin: "0px",
  fontWeight: "bold",
  borderBottom: "solid #1DE9B6",
  marginRight: "240px"
};

const styleTextarea = {
  width: "500px",
  height: "100px"
};

// COLUMN_POST

const ColumnPost = () => (
  <Card style={styleText}>
    <CardBody>
      <h3 style={styleHeader}>REGISTER</h3>
      <Form style={styleForm}>
        <FormGroup>
          <Label for="eventTitle" />
          <Input
            type="text"
            name="eventTitle"
            id="eventTitle"
            placeholder="Event Title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventDate" />
          <Input
            type="Date"
            name="eventDate"
            id="eventDate"
            placeholder="Event Date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventVenue" />
          <Input
            type="text"
            name="eventVenue"
            id="eventVenue"
            placeholder="Venue"
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventTime" />
          <Input
            type="time"
            name="eventTime"
            id="eventTime"
            placeholder="Event Time"
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventCategory" />
          <Input
            type="text"
            name="eventCategory"
            id="eventCategory"
            placeholder="Event Category"
          />
        </FormGroup>
        <FormGroup>
          <Label for="upload" />
          <Input
            type="file"
            name="picture"
            id="picture"
            accept="image/*"
            placeholder="Upload Picture"
          />
        </FormGroup>
        <FormGroup>
          <Label for="EventDescription" />
          <textArea
            style={styleTextarea}
            type="text"
            name="EventDescription"
            id="EventDescription"
            placeholder="Event Description"
          />
        </FormGroup>
        <Button style={styleButton} color="success">
          PUBLISH
        </Button>
      </Form>
    </CardBody>
  </Card>
);

// POST

const Post = () => (
  <Container>
    <Row className="center" id="row-auth">
      <Col>
        <ColumnPost />
      </Col>
    </Row>
  </Container>
);

export default Post;
