// import React from "react";
// import Link from "./Link";
//
// const LinkToEvent = props => (
//   <Link to={`/event/${props.event.id}`}>{props.event.title}</Link>
// );
//
// export default LinkToEvent;

import React from "react";
import { Link } from "react-router-dom";

const LinkToEvent = props => (
  <Link to={`/event/${props.event.id}`}>{props.event.title}</Link>
);

export default LinkToEvent;
