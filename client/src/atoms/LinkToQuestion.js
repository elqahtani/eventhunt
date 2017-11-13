import React from "react"
import Link from "./Link"

const LinkToQuestion = props => (
  <Link to={`/question/${props.question._id}`}>{props.question.title}{props.question.name}</Link>
)

export default LinkToQuestion
