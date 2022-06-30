import * as React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export function PageHome() {
  return (
    <div>
      <Navbar bg="$white" variant="light">
        <Container>
          <Navbar.Brand href="#home">Ecomap</Navbar.Brand>
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
    </div>
  );
}
