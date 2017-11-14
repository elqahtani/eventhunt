import React from "react";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";

import DATA_EVENTS from "../data/questions";

const div1 = {
  margin: "0"
};

const Text1 = {
  float: "left"
};

const Text2 = {
  float: "left",
  fontFamily: "lato",
  padding: "20px",
  fontSize: "16px",
  color: "grey"
};

const Text3 = {
  fontWeight: "bold",
  fontSize: "16px",
  float: "left",
  padding: "20px"
};

const Home = () => (
  <div style={div1}>
    <Container>
      <Row >
        <Col sm={{ size: 'auto', offset: 1 }}>
        <h5 style={Text3}>We found match events</h5>
        <p style={Text2}>Seminar & traning</p>
        <p style={Text2}>Yogyakarta</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={div1}>TODAY ()</p>
        </Col>
        <Col>
        <span><hr/></span>
        </Col>
      </Row>

      {DATA_EVENTS.map(question => {
        return (
          <Card body className="text-center">
            <Link to={`/question/${question._id}`}>
              <h3>{question.title}</h3>{" "}
            </Link>
            <Button color="success" size="sm">
              asked by {question.createdBy.name}
            </Button>
          </Card>
        );
      })}
    </Container>
  </div>
);

export default Home;
