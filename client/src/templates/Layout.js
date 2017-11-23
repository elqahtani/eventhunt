import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";
import NavigationBar from "../organisms/NavigationBar";
import Footer from "../organisms/Footer";

// STYLING_CSS ---------------------------------------------------
const ContainerStyle = {
  margin: "0 auto",
}

const styleCanvas={
  backgroundColor: "#f6f9fa"
}


// Render component ---------------------------------------------------
const Layout = props => (
  <div style={styleCanvas}>
    <NavigationBar />
    <Container style={ContainerStyle}>
      <Content >{props.children}</Content>
    </Container>
    <Footer />
  </div>
);

export default Layout;
