import React from "react"

import LinkToQuestion from "../atoms/LinkToQuestion"

import DATA_QUESTIONS from "../data/questions"

const Profiles = () => (
  <ul>
    {DATA_QUESTIONS.map(question => {
      return (
        <li>
          <LinkToQuestion question={question} />
        </li>
      )
    })}
  </ul>
)

export default Profiles