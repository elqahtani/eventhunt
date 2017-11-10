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

const Home = () => (
  <ul>
    {DATA_QUESTIONS.map(question => {
      return (
      <Card body className="text-center">
          <Link to={`/question/${question._id}`}>
            <h3>{question.title}</h3>{" "}
          </Link>
          <Button color="success" size="sm">asked by {question.createdBy.name}</Button>
      </Card>
      )
    })}
  </ul>
)

export default Home