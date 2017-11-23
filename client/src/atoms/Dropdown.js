import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import helpers from "../helpers";
import { withRouter } from "react-router-dom";

const styleText1 = {
  display: "inline",
  float: "right",
  fontFamily: "lato",
  fontWeight: "bold",
  fontSize: "13px",
  color: "#ffffff"
};

const styleText2 = {
  background: "transparent",
  fontFamily: "lato",
  marginTop: "23px",
  marginRight: "30px",
  marginLeft: "30px",
  fontWeight: "bold",
  fontSize: "13px",
  color: "#ffffff",
  padding: "0",
  border: "0"
};

class Dropdown1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleClick = event => {
    helpers.deleteToken();
    this.props.history.push("/welcome");
  };

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        style={styleText1}
      >
        <DropdownToggle caret style={styleText2}>
          Username
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Change photo</DropdownItem>
          <DropdownItem>Update bio</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.handleClick}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
export default withRouter(Dropdown1);
