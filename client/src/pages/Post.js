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
  Button
} from "reactstrap"

import DATA_QUESTIONS from "../data/questions"

const QuestionCard = props => (
  <Card>
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardSubtitle>
        Asked by <Link to={`/profile/${props.userId}`}>{props.userName}</Link>
      </CardSubtitle>
      <CardText>
        <Button color="success" size="sm">
          Answer
        </Button>
      </CardText>
    </CardBody>
  </Card>
)

const Question = props => {
  const question = DATA_QUESTIONS.filter(question => {
    return question._id === Number(props.match.params.id)
  })
  const answers = question[0].answers

  return (
    <Col>
      <QuestionCard
        title={question[0].title}
        userId={question[0].createdBy._id}
        userName={question[0].createdBy.name}
      />

      <div>
        {answers.length ? `${answers.length} answers` : `No answer yet`}
      </div>

      <hr />

      {answers.map(answer => {
        return (
          <div>
            <h6>{answer.createdBy.name}</h6>
            <p>{answer.text}</p>
            <hr />
          </div>
        )
      })}
    </Col>
  )
}

export default Question