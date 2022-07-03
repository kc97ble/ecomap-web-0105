import * as React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import imgLogoEcomap from "../../assets/img/ecomap_logo.png";

export default function TheNavbar() {
  return (
    <>
      <Navbar
        className="fs-5 text-dark"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src={imgLogoEcomap} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse role={null} id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">TRANG CHỦ</Nav.Link>
              <Nav.Link href="#map">BẢN ĐỒ</Nav.Link>
              <Nav.Link href="#education">ĐÀO TẠO</Nav.Link>
              <Nav.Link href="#news">TIN TỨC</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button className="me-1" variant="outline-secondary border-0">
                  Đăng ký
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button
                  variant="primary"
                  style={{
                    borderRadius: "27px",
                  }}
                  className="px-3 fw-light"
                >
                  Đăng nhập
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
