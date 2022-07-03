import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "./components/About";
import Banner from "./components/Banner";

export default function TheBanner() {
  return (
    <Container fluid>
      <Container fluid="sm">
        <Row className="gy-5">
          <Col xl={6}>
            <About />
          </Col>
          <Col xl={6}>
            <Banner />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
