import React from "react";
import {
  Card,
  CardBody,
  Label,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";

import helpers from "../helpers";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["Authorization"] = helpers.getToken();

const styleForm = {
  width: "100%",
  height: "920px"
};

const styleInput = {
  border: "none",
  borderBottom: "1px solid #CFD8DC",
  marginBottom: "30px",
  width: "100%"
};

const styleButton = {
  width: "96%",
  position: "absolute",
  bottom: "10px"
};

const styleText = {
  fontFamily: "lato",
  width: "80%",
  fontSize: "16px",
  marginRight: "100px"
};

const styleHeader = {
  fontFamily: "lato",
  fontSize: "16px",
  margin: "0px",
  marginRight: "86%",
  fontWeight: "bold",
  borderBottom: "solid #1DE9B6"
};

const styleTextarea = {
  width: "100%",
  minHeight: "140px",
  border: "none",
  borderBottom: "1px solid #CFD8DC"
};

const styleMainDiv = {
  marginTop: "30px"
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      venue: "",
      date: "",
      time: "",
      category: "",
      description: "",
      originWebsite: ""
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      location: this.state.location,
      date: this.state.date,
      time: this.state.time,
      category: this.state.category,
      description: this.state.description,
      originWebsite: this.state.originWebsite
    };

    axios
      .post(`/api/events`, payload)
      .then(response => {
        // NOTIFY ASKER
        console.log(response.data);
        alert(`${this.state.title}  posted`);
        // REDIRECT TO ANSWER
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        alert(`${error}`);
      });
  };

  render() {
    return (
      <div style={styleMainDiv}>
        <h3 style={styleHeader}>POST EVENT</h3>
        <br />
        <Form style={styleForm} onSubmit={this.handleSubmit}>
          <Card style={styleText}>
            <CardBody>
              <FormGroup>
                <Label for="eventTitle" />
                <Input
                  style={styleInput}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Event Title"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventLocation" />
                <Input
                  style={styleInput}
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventDate" />
                <Input
                  style={styleInput}
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Event Date"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventTime" />
                <Input
                  style={styleInput}
                  type="text"
                  name="time"
                  id="time"
                  placeholder="Event Time"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventOriginWebsite" />
                <Input
                  style={styleInput}
                  type="text"
                  name="originWebsite"
                  id="originWebsite"
                  placeholder="Origin Website"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventCategory" />
                <Input
                  style={styleInput}
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Event Category"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="upload" />
                <Input
                  style={styleInput}
                  type="file"
                  name="picture"
                  id="picture"
                  accept="image/*"
                  placeholder="Upload Picture"
                />
              </FormGroup>
              <FormGroup>
                <Label for="EventDescription" />
                <textarea
                  style={styleTextarea}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Event Description"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <br />
              <Button style={styleButton} color="success">
                POST
              </Button>
            </CardBody>
          </Card>
        </Form>
      </div>
    );
  }
}

export default withRouter(Post);
