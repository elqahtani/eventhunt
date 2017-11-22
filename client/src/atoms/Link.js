import React from "react";
import { Link } from "react-router-dom";

const CustomLink = props => <Link to={props.to}>{props.children}</Link>;

export default CustomLink;
