import React from "react"
import { Link } from "react-router-dom"

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
} from "reactstrap"

import DATA_EVENTS from "../data/questions"

const div1 = {
  margin: "0"
}

const Text1 = {
  display:"inline-block"
}

const Text2 = {
  float: "left",
  padding: "20px"
}

const Text3 = {
  fontWeight:"bold",
  float: "left",
  padding: "20px"
}

const Home = () => (
  <div style={div1}>
    <Container>
    <Row>
      <Row style={Text1}>
      <h5 style={Text3}>We found match events</h5>
      <p style={Text2}>Seminar & traning</p>
      <p style={Text2}>Yogyakarta</p>
      </Row>
      </Row>
      {DATA_EVENTS.map(question => {
        return (
        <Card body className="text-center">
            <Link to={`/question/${question._id}`}>
              <h3>{question.title}</h3>{" "}
            </Link>
            <Button color="success" size="sm">asked by {question.createdBy.name}</Button>
        </Card>
        )
      })}

    </Container>
  </div>
)

export default Home
