import React from "react"
import { Row } from "reactstrap"

const ContainerStyle = {
  margin: "10px"
}

const Content = props => (
  <Row style={ContainerStyle} className="m-5 justify-content-md-center">{props.children}</Row>
)

export default Content
