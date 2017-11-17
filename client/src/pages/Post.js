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

import Category from "../atoms/Category";

// STYLING_CSS ---------------------------------------------------

const styleForm = {
  width: "100%",
  height: "700px"
};

const styleInput = {
  border: "none",
  borderBottom: "1px solid #CFD8DC",
  marginBottom: "30px",
  width: "100%"
};

const styleButton = {
  width: "94%",
  position: "absolute",
  bottom: "10px"
};

const styleText = {
  fontFamily: "lato",
  width: "80%",
  fontSize: "16px",
  marginRight: "100px"
};

const styleHeader = {
  fontFamily: "lato",
  fontSize: "16px",
  margin: "0px",
  marginRight: "86%",
  fontWeight: "bold",
  borderBottom: "solid #1DE9B6"
};


const styleTextarea = {
  width: "100%",
  border: "none",
  borderBottom: "1px solid #CFD8DC"
};

// COLUMN_POST

const ColumnPost = () => (
  <div>
    <h3 style={styleHeader}>POST EVENT</h3>
    <br/>
    <Card style={styleText}>
      <CardBody>

        <Form style={styleForm}>
          <FormGroup>
            <Label for="eventTitle" />
            <Input
              style={styleInput}
              type="text"
              name="eventTitle"
              id="eventTitle"
              placeholder="Event Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="eventVenue" />
            <Input
              style={styleInput}
              type="text"
              name="eventVenue"
              id="eventVenue"
              placeholder="Location"
            />
          </FormGroup>
          <FormGroup>
            <Label for="eventDate" />
            <Input
              style={styleInput}
              type="Date"
              name="eventDate"
              id="eventDate"
              placeholder="Event Date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="eventTime" />
            <Input
              style={styleInput}
              type="time"
              name="eventTime"
              id="eventTime"
              placeholder="Event Time"
            />
          </FormGroup>
          <FormGroup>
            <Label for="eventCategory" />
            <Input
              style={styleInput}
              type="text"
              name="eventCategory"
              id="eventCategory"
              placeholder="Event Category"
            />
          </FormGroup>
          <FormGroup>
            <Label for="upload" />
            <Input
              style={styleInput}
              type="file"
              name="picture"
              id="picture"
              accept="image/*"
              placeholder="Upload Picture"
            />
          </FormGroup>
          <FormGroup>
            <Label for="EventDescription" />
            <textarea
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
  </div>
);

// POST

const Post = () => (
  <Container>
    <Row className="center" id="row-auth">
      <Col>
        <ColumnPost />
      </Col>
      <Category />
    </Row>
  </Container>
);

export default Post;
