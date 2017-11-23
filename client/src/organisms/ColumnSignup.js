import React from "react"
import { Button, Form, FormGroup, Label, Input, Card, CardBody} from "reactstrap"
import axios from "axios"

const initialState = {
  signupName: "",
  signupEmail: "",
  signupPassword: ""
}

const styleButton = {
  width: "90%",
  position: "absolute",
  bottom: "10px"
};

const styleForm = {
  width: "100%",
  height: "350px"
};

const styleInput = {
  border: "none",
  borderBottom: "1px solid #CFD8DC"
};

const styleText = {
  fontFamily: "lato",
  width: "80%",
  fontSize: "16px",
  margin: "0px auto"
};

const styleHeader = {
  fontFamily: "lato",
  fontSize: "16px",
  margin: "0px",
  fontWeight: "bold",
  borderBottom: "solid #1DE9B6",
  marginRight: "240px"
};

export default class ColumnSignup extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  // HANDLE CHANGE IN SIGN UP FORM

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  // HANDLE SUBMIT SIGN UP

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      name: this.state.signupName,
      email: this.state.signupEmail,
      password: this.state.signupPassword
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, payload)
      .then(response => {
        this.setState(initialState)
        alert(`Sign up success!`)
      })
      .catch(error => {
        alert(`${error}`)
        console.log(error)
      })
  }

  // RENDER SIGN UP FORM

  render() {
    return (
      <Card style={styleText}>
        <CardBody>
        <h3 style={styleHeader}>REGISTER</h3>
        <Form onSubmit={this.handleSubmit} style={styleForm}>
          <br />
          <FormGroup>
            <Label for="signupName" />
            <Input
              style={styleInput}
              type="text"
              name="signupName"
              id="signupName"
              placeholder="Full Name"
              value={this.state.signupName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupEmail" />
            <Input
              style={styleInput}
              type="email"
              name="signupEmail"
              id="signupEmail"
              placeholder="Email"
              value={this.state.signupEmail}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupPassword" />
            <Input
              style={styleInput}
              type="password"
              name="signupPassword"
              id="signupPassword"
              placeholder="Password"
              value={this.state.signupPassword}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button style={styleButton} color="success" type="submit" value="Sign Up">
          REGISTER
        </Button>
        </Form>
      </CardBody>
    </Card>
    )
  }
}
