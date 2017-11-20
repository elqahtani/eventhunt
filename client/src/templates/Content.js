import React from "react"

const ContainerStyle = {
  margin: "0 auto",
}

const Content = props => (
  <div style={ContainerStyle} className="contentCenter">{props.children}</div>
)

export default Content
