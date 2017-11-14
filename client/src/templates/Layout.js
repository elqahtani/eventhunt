import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";
import NavigationBar from "../organisms/NavigationBar";
import Footer from "../organisms/Footer";

// STYLING_CSS ---------------------------------------------------
const ContainerStyle = {
  margin: "0 auto",
}


// Render component ---------------------------------------------------
const Layout = props => (
  <div>
    <NavigationBar />
    <Container style={ContainerStyle}>
      <Content >{props.children}</Content>
    </Container>
    <Footer />
  </div>
);

export default Layout;
