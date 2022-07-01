import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "./components/About";
import Banner from "./components/Banner";

export default function TheBanner() {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <About />
        </Col>
        <Col>
          <Banner />
        </Col>
      </Row>
    </Container>
  );
}
