import React from "react"
import { Row } from "reactstrap"

const Content = props => (
  <Row className="m-5 justify-content-md-center">{props.children}</Row>
)

export default Content