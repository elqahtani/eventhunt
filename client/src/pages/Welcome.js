import React from "react";
import { Row, Container, Col } from "reactstrap";

import ColumnSignup from "../organisms/ColumnSignup";
import ColumnLogin from "../organisms/ColumnLogin";
import helpers from "../helpers";

// STYLING_CSS ---------------------------------------------------
const styleContainer = {
  marginTop: "30px"
};

// React render ---------------------------------------------------

export default class Welcome extends React.Component {
  componentWillMount() {
    helpers.deleteToken();
  }

  render() {
    return (
      <Container style={styleContainer}>
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
