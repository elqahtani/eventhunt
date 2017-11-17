import React from "react"
import {Breadcrumb, BreadcrumbItem } from "reactstrap"
import { NavLink } from "react-router-dom";

const styleText6 = {
  backgroundColor: "#1DE9B6",
  display: "inline",
  float: "right",
  padding: "3px",
  marginTop: "18px",
  marginRight: "30px"
};

const styleText7 = {
  fontFamily: "lato",
  fontWeight: "bold",
  fontSize: "13px",
  color: "#ffffff"
};

export default class SignIn extends React.Component {

  render() {
    return (
      <Breadcrumb style={styleText6}>
        <BreadcrumbItem>
          <NavLink to="/welcome" style={styleText7}>SIGN IN</NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
}
