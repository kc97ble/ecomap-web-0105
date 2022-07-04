import * as React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

import imgLogoEcomap04 from "./assets/imgLogoEcomap04.png";

export default function SectionSubscription() {
  const [email, setEmail] = React.useState("");

  const handleClick = () => {
    if (/^\S+@\S+\.\S+$/.test(email)) {
      alert(`Đăng ký thành công với email ${email}`);
    } else {
      alert("Email không hợp lệ");
    }
  };

  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        <Col style={{ maxWidth: "600px" }}>
          <Form
            className="m-4 p-4 d-flex flex-column justify-content-center align-items-center border rounded"
            onSubmit={(event) => event.preventDefault()}
            noValidate={true}
          >
            <Image className="mb-2" src={imgLogoEcomap04} width="300px" />
            <h5 className="text-center mb-3">Đăng ký nhận thông tin</h5>
            <Form.Group className="my-2">
              <Form.Control
                type="email"
                placeholder="Email của bạn"
                style={{ minWidth: "250px" }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Button
              className="my-2"
              variant="dark"
              type="submit"
              style={{ minWidth: "250px" }}
              onClick={handleClick}
            >
              Nhận thông tin
            </Button>
            <div
              className="fw-light text-secondary my-3 text-center"
              style={{
                maxWidth: "300px",
                fontSize: "0.8rem",
                ...{ "--bs-text-opacity": 0.75 },
              }}
            >
              Đăng ký nhận tin để nhận được cập nhật tin tức định kỳ hàng tháng
              từ chúng tôi!
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
