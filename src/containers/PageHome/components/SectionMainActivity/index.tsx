import * as React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import imgBullet1 from "./assets/imgBullet1.png";
import imgBullet2 from "./assets/imgBullet2.png";
import imgBullet3 from "./assets/imgBullet3.png";

export default function SectionMainActivity() {
  return (
    <Container className="my-4 py-4">
      <Container className="my-3" style={{ maxWidth: "600px" }}>
        <Row>
          <Col>
            <h3 className="fw-bold my-4">Dự án bao gồm 3 hoạt động chính</h3>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="d-none d-sm-block" xs="auto">
            <Image src={imgBullet1} style={{ maxWidth: "80px" }} />
          </Col>
          <Col>
            <h4>Ecomap Website</h4>
            <p
              className="bg-light p-4 rounded-3 text-black"
              style={{ boxShadow: "none", ...{ "--bs-text-opacity": 0.75 } }}
            >
              Bản đồ dữ liệu mở về các dự án môi trường của thanh niên được hiển
              thị trực quan chia theo từng chủ đề và khu vực địa lý.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="d-none d-sm-block" xs="auto">
            <Image src={imgBullet2} style={{ maxWidth: "80px" }} />
          </Col>
          <Col>
            <h4>Ecomap Training</h4>
            <p
              className="bg-light p-4 rounded-3 text-black"
              style={{ boxShadow: "none", ...{ "--bs-text-opacity": 0.75 } }}
            >
              Cung cấp các khóa học từ cơ bản đến nâng cao về kiến thức triển
              khai và xây dựng một dự án cộng đồng. Tại đây, trao cho thanh niên
              cơ hội được học tập bình đẳng bất kể bạn là ai, ở đâu cũng có cơ
              hội để tham gia vào các hoạt động ý nghĩa.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="d-none d-sm-block" xs="auto">
            <Image src={imgBullet3} style={{ maxWidth: "80px" }} />
          </Col>
          <Col>
            <h4>Ecomap Stories</h4>
            <p
              className="bg-light p-4 rounded-3 text-black"
              style={{ boxShadow: "none", ...{ "--bs-text-opacity": 0.75 } }}
            >
              Tổng hợp chuỗi các câu chuyện truyền cảm hứng được ghi lại một
              cách chân thực từ các dự án trên cả nước. Qua đây, các bạn trẻ có
              thể học hỏi kinh nghiệm lẫn nhau từ những mô hình đã triển khai
              thực tế.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
