import * as React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";

import imgLogoEcomap04 from "./assets/imgLogoEcomap04.png";

export default function TheNavbar() {
  return (
    <Navbar bg="$white" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={imgLogoEcomap04} width="260px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" role="navigation">
          <Nav className="me-auto">
            <Nav.Link className="text-center" href="#home">
              Trang chủ
            </Nav.Link>
            <Nav.Link className="text-center" href="#map">
              Bản đồ
            </Nav.Link>
            <Nav.Link className="text-center" href="#education">
              Đào tạo
            </Nav.Link>
            <Nav.Link className="text-center" href="#news">
              Tin tức
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item className="m-1" as={Button} variant="outline-secondary">
              Đăng nhập
            </Nav.Item>
            <Nav.Item className="m-1" as={Button} variant="primary">
              Đăng ký
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
