import * as React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import imgLogoEcomap04 from "./assets/imgLogoEcomap04.png";

export default function TheNavbar() {
  return (
    <Navbar bg="$white" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={imgLogoEcomap04} width="260px" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Trang chủ</Nav.Link>
          <Nav.Link href="#map">Bản đồ</Nav.Link>
          <Nav.Link href="#education">Đào tạo</Nav.Link>
          <Nav.Link href="#news">Tin tức</Nav.Link>
        </Nav>
        <Button className="me-1" variant="outline-secondary">
          Đăng nhập
        </Button>
        <Button variant="primary">Đăng ký</Button>
      </Container>
    </Navbar>
  );
}
