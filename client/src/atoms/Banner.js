import React from "react"
import {Container} from "reactstrap"

const styleText3 = {
  fontFamily: "lato",
  fontSize: "36px",
  textAlign: "center",
  marginBottom: "100",
  color: "#ffffff"
};

const styleText4 = {
  fontFamily: "lato",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  margin:"100px",
  color: "#ffffff"
};

export default class Banner extends React.Component {

  render() {
    return (
      <Container>
        <h3 style={styleText4}>FIND & POST POPULAR EVENT</h3>
        <p style={styleText3}>
          Find popular events that match your passion
        </p>
        <p style={styleText3}>
         or share events nearby
        </p>
      </Container>

    );
  }
}
