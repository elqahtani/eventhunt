import React from "react";
import {
  Row,
  Container,
  Col,
} from "reactstrap";

import ColumnSignup from "../organisms/ColumnSignup"
import ColumnLogin from "../organisms/ColumnLogin"
import helpers from "../helpers";

// STYLING_CSS ---------------------------------------------------

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
