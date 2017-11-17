import React from "react";
import {
  Row,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";

import ColumnSignup from "../organisms/ColumnSignup"
import ColumnLogin from "../organisms/ColumnLogin"
import helpers from "../helpers";

// STYLING_CSS ---------------------------------------------------

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


export default class Welcome extends React.Component {
  componentWillMount() {
    helpers.deleteToken();
  }

  render() {
    return (
      <Container>
        <Row className="center" id="row-auth">
          <Col>
            <ColumnLogin />
          </Col>
          <Col>
            <ColumnSignup />
          </Col>
        </Row>
      </Container>
    );
  }
}
