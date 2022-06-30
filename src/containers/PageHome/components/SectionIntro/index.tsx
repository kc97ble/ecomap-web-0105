import * as React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Placeholder,
  Row,
} from "react-bootstrap";

export default function SectionIntro() {
  return (
    <Container className="my-5 py-5 bg-light">
      <Row>
        <Col>
          <Container>
            <h2>Tìm hiểu về Ecomap!</h2>
            <h6>Nền tảng dành riêng cho các dự án môi trường của thanh niên</h6>
            <Button className="my-2">Thông tin chi tiết</Button>
            <Card>
              <Card.Body>
                <Card.Text className="fs-6">
                  Ecomap ra đời với hy vọng rằng sẽ không có dự án nào bị dừng
                  lại chỉ bởi nó được sinh ra ở một nơi mà không ai biết đến
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col xs={8}>
          <Placeholder as="div" animation="glow">
            <Placeholder
              className="w-100"
              xs={6}
              size="lg"
              style={{ height: "300px" }}
            />
          </Placeholder>
        </Col>
      </Row>
    </Container>
  );
}
