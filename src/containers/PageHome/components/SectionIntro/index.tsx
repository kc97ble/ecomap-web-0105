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

import imgLogoEcomap from "./assets/ecomap_logo.png";
import imgFounder from "./assets/founder.png";

export default function SectionIntro() {
  return (
    <Container className="my-5 py-5 bg-light" fluid>
      <Container fluid="sm">
        <Row className="gy-5">
          <Col xs={12} xl={4}>
            <Container>
              <h1>Tìm hiểu về Ecomap!</h1>
              <h4 className="fw-light">
                Kênh thông tin dành cho các sáng kiến môi trường của thanh niên
              </h4>
              <Button
                className="my-4 w-100 py-3 fw-bold fs-5"
                style={{
                  borderRadius: "52px",
                }}
              >
                Thông tin chi tiết
                <svg
                  width="23"
                  height="23"
                  className="mx-2"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 6.5L11.263 8.24731C12.6689 9.64075 13.3719 10.3375 13.4801 11.1867C13.5066 11.3947 13.5066 11.6053 13.4801 11.8133C13.3719 12.6625 12.6689 13.3592 11.263 14.7527L9.5 16.5M21.5 11.5C21.5 17.0228 17.0228 21.5 11.5 21.5C5.97715 21.5 1.5 17.0228 1.5 11.5C1.5 5.97715 5.97715 1.5 11.5 1.5C17.0228 1.5 21.5 5.97715 21.5 11.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
              <Card className="border-0 rounded-3">
                <Card.Body>
                  <div className="py-2">
                    <Image src={imgLogoEcomap} width={127} height={45} />
                  </div>
                  <p className="fs-5">
                    “Ecomap tin rằng người trẻ yêu môi trường xứng đáng nhận
                    được sự hỗ trợ và thúc đẩy để phát triển một cách bài bản”
                  </p>
                  <div className="d-flex">
                    <Image src={imgFounder} width={60} height={60} />
                    <div className="d-flex flex-column justify-content-center px-3">
                      <span>Han Myra</span>
                      <span className="fw-light">Co-founder Ecomap</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </Col>
          <Col xs={12} xl={8}>
            <Container>
              <Placeholder as="div" animation="glow">
                <Placeholder
                  className="w-100"
                  xs={6}
                  size="lg"
                  style={{ height: "300px" }}
                />
              </Placeholder>
              <Row className="mt-4">
                <Col xs={12} sm={4}>
                  <h3>Kết nối</h3>
                  <p>
                    Trang bị đầy đủ bộ công cụ kiến thức cho thanh niên để có
                    thể vận hành dự án xã hội.
                  </p>
                </Col>
                <Col xs={12} sm={4}>
                  <h3>Kiến thức</h3>
                  <p>
                    Trang bị đầy đủ bộ công cụ kiến thức cho thanh niên để có
                    thể vận hành dự án xã hội.
                  </p>
                </Col>
                <Col xs={12} sm={4}>
                  <h3>Động lực</h3>
                  <p>
                    Lan tỏa thông điệp tích cực qua các câu chuyện/ mô hình thực
                    tế trên cả nước
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
