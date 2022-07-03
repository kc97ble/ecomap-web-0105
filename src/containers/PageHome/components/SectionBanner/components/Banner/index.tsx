import * as React from "react";
import { Card, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <Card
        bg="primary"
        style={{ height: "500px", borderRadius: "35px" }}
      ></Card>
    </Container>
  );
};

export default Banner;
