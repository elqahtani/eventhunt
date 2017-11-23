import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import helpers from "../helpers";

const styleText5 = {
  fontFamily: "lato",
  display: "inline",
  fontWeight: "bold",
  float: "right",
  padding: "0",
  fontSize: "13px",
  marginTop: "23px",
  marginRight: "30px",
  color: "#ffffff"
};

const userToken = helpers.decodeToken();

const USER = {
  _id: 0,
  name: "Administrator"
};

const PostButton = props => (
  <div>
    <NavLink to={`/post/${USER._id}`} style={styleText5}>
      POST EVENT
    </NavLink>
  </div>
);

export default PostButton;
