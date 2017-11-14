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
  width: "100%",
  height: "350px"
};

const styleButton = {
  width: "100%",
  bottom: "0"
};

const styleText = {
  fontFamily: "lato",
  width: "80%",
  fontSize: "16px",
  margin: "0px auto"
};

const styleHeader = {
  fontFamily: "lato",
  fontSize: "16px",
  margin: "0px",
  fontWeight: "bold",
  borderBottom: "solid #1DE9B6",
  marginRight: "240px"
};

// COLUMN_SIGNUP

const ColumnSignup = () => (
  <Card style={styleText}>
    <CardBody>
      <h3 style={styleHeader}>REGISTER</h3>
      <Form style={styleForm}>
        <FormGroup>
          <Label for="signupFullName" />
          <Input
            type="text"
            name="signupFullName"
            id="signupFullName"
            placeholder="Full Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="signupEmail" />
          <Input
            type="email"
            name="signupEmail"
            id="signupEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="signupPassword" />
          <Input
            type="password"
            name="signupPassword"
            id="signupPassword"
            placeholder="Password"
          />
        </FormGroup>
        <Button style={styleButton} color="success">
          REGISTER
        </Button>
      </Form>
    </CardBody>
  </Card>
);

// COLUMN_LOGIN

const ColumnLogin = () => (
  <Card style={styleText}>
    <CardBody>
      <h3 style={styleHeader}>LOGIN</h3>
      <Form style={styleForm}>
        <FormGroup>
          <Label for="loginEmail" />
          <Input
            type="email"
            name="loginEmail"
            id="loginEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword" />
          <Input
            type="password"
            name="loginPassword"
            id="loginPassword"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Link to="/forgot">Forgot password?</Link>
        </FormGroup>
        <br />
        <Button style={styleButton} color="success">
          LOGIN
        </Button>
      </Form>
    </CardBody>
  </Card>
);

// WELCOME

const Welcome = () => (
  <Container >
    <Row className="center" id="row-auth" >
      <Col>
        <ColumnLogin />
      </Col>
      <Col>
        <ColumnSignup />
      </Col>
    </Row>
  </Container>
);

export default Welcome;
