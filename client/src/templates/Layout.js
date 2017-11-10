import React from "react";
import { Container } from "reactstrap";

import Content from "./Content";

import NavigationBar from "../organisms/NavigationBar";
import Footer from "../organisms/Footer";

const Layout = props => (
  <div>
    <NavigationBar />
    <Container>
      <Content>{props.children}</Content>
    </Container>
    <Footer />
  </div>
);

export default Layout;
