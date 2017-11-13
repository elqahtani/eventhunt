import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";

import NavigationBar from "../organisms/NavigationBar";
import Footer from "../organisms/Footer";

const ContainerStyle = {
  margin: "50px",
  display:"grid"
}

const ContainerChild = {
  gridColumn: "1 / 3"
}

const Layout = props => (
  <div>
    <NavigationBar />
    <Container style={ContainerStyle}>
      <Content style={ContainerChild}>{props.children}</Content>
    </Container>
    <Footer />
  </div>
);

export default Layout;
