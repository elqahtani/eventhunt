import React from "react";
import { Link } from "react-router-dom";

const LinkToEventDiv = props => <Link to={`/event/${props.event.id}`} />;

export default LinkToEventDiv;
