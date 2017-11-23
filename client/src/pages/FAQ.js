import React from "react";
import { Col } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";

// const USER = {
//   _id: 0,
//   name: "Administrator"
// };

const Text1 = {
  margin: "0 auto",
  textAlign: "center",
  fontSize: "16px",
  marginBottom: "10px",
  marginTop: "10px"
};

const Ask = () => <div style={Text1}>FAQ</div>;
// <Col xs={8}>
//   <Form>
//     <span>{USER.name} asked</span>
//     <FormGroup>
//       <Input
//         type="text"
//         name="askText"
//         id="askText"
//         placeholder="What is your question?"
//       />
//     </FormGroup>
//     <Button color="danger">Ask Question</Button>
//   </Form>
// </Col>

export default Ask;
