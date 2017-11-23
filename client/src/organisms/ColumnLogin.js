import React from "react";
import { withRouter } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";
import axios from "axios";

import Link from "../atoms/Link";

import helpers from "../helpers";

const initialState = {
  loginEmail: "",
  loginPassword: ""
};

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

class ColumnLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // HANDLE CHANGE IN LOGIN FORM

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.siblingAFunc;
    this.setState({
      [name]: value
    });
  };

  // HANDLE SUBMIT LOGIN

  handleSubmit = event => {
    event.preventDefault();

    const payload = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, payload)
      .then(response => {
        if (response.data.token) {
          helpers.setToken(response.data.token);
          this.setState(initialState);
          // NOTIFY VISITOR
          // console.log(response.data)
          alert(`Login success!`);
          // REDIRECT TO HOME
          this.props.history.push("/");
        } else {
          throw new Error();
        }
      })
      .catch(error => {
        alert(`${error}`);
        console.log(error);
      });
  };

  // RENDER LOGIN FORM

  render() {
    return (
      <Card style={styleText}>
        <CardBody>
          <h3 style={styleHeader}>LOGIN</h3>
          <Form onSubmit={this.handleSubmit} style={styleForm}>
            <br />
            <FormGroup>
              <Label for="loginEmail" />
              <Input
                style={styleInput}
                type="email"
                name="loginEmail"
                id="loginEmail"
                placeholder="Email"
                value={this.state.loginEmail}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="loginPassword" />
              <Input
                style={styleInput}
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="Password"
                value={this.state.loginPassword}
                onChange={this.handleChange}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Link to="/forgot">Forgot password?</Link>
            </FormGroup>
            <br />
            <Button
              style={styleButton}
              color="success"
              type="submit"
              value="Login"
            >
              LOGIN
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(ColumnLogin);
