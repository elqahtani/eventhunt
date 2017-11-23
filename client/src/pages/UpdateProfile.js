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



// STYLING_CSS ---------------------------------------------------

const styleForm = {
  fontFamily: "lato",
  width: "100%",
  height: "350px"
};

const styleInput = {
  border: "none",
  borderBottom: "1px solid #CFD8DC",
  marginBottom: "30px",
  width: "100%"
};

const styleButton = {
  width: "94%",
  bottom: "10px",
  position: "absolute"
};

const styleText = {
  fontFamily: "lato",
  width: "60%",
  fontSize: "16px",
  margin: "0 auto"
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
  border: "none",
  borderBottom: "1px solid #CFD8DC",
  marginBottom: "30px",
  width: "100%"
};

// COLUMN_UPDATE PROFILE

const ColumnUpdateProfile = () => (
  <Card style={styleText}>
    <CardBody>
      <h3 style={styleHeader}>PROFILE</h3>
      <Form style={styleForm}>
        <FormGroup>
          <Label for="fullname" />
          <Input
            style={styleInput}
            type="text"
            name="name"
            id="name"
            placeholder="Fullname"
          />
        </FormGroup>

        <FormGroup>
          <Label for="location" />
          <Input
            style={styleInput}
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
        </FormGroup>

        <FormGroup>
          <Label for="description" />
          <textarea
            style={styleTextarea}
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />
        </FormGroup>
        <Button style={styleButton} color="success">
          PUBLISH
        </Button>
      </Form>
    </CardBody>
  </Card>
);

// UPDATE PROFILE

const UpdateProfile = () => (
  <Container>
    <Row className="center" id="row-auth">
      <Col>
        <ColumnUpdateProfile />
      </Col>
    </Row>
  </Container>
);

export default UpdateProfile;
