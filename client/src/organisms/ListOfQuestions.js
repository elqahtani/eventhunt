import React from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap"

import Link from "../atoms/Link"
import LinkToQuestion from "../atoms/LinkToQuestion"
import LinkToProfile from "../atoms/LinkToProfile"

import DATA_QUESTIONS from "../data/questions"

// -----------------------------------------------------------------------------

const CardQuestion = props => (
  <Card
    style={{
      margin: "10px"
    }}
  >
    <CardBody key={props.question._id}>
      <CardTitle>
        <h3>
          <LinkToQuestion question={props.question} />
        </h3>
      </CardTitle>
    </CardBody>
  </Card>
)

// -----------------------------------------------------------------------------

const Home = () => (
  <Col xs={10}>
    {DATA_QUESTIONS.map(question => {
      if (question.answers.length > 0) {
        return <CardQuestion question={question} />
      }
    })}
  </Col>
)

export default Home
