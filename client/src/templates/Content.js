import React from "react"
import { Row } from "reactstrap"

const ContainerStyle = {
  margin: "0 auto",
}

const Content = props => (
  <div style={ContainerStyle} className="contentCenter">{props.children}</div>
)

export default Content
