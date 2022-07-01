import * as React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

import imgBullet1 from "./assets/imgBullet1.png";
import imgBullet2 from "./assets/imgBullet2.png";
import imgBullet3 from "./assets/imgBullet3.png";

export default function SectionMainActivity() {
  return (
    <Container className="my-4 py-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h3 className="fw-bold my-2">Dự án bao gồm 3 hoạt động chính</h3>
          <Container className="my-4">
            <Row className="mb-4">
              <Col xs="auto">
                <Image src={imgBullet1} style={{ maxWidth: "80px" }} />
              </Col>
              <Col>
                <h4>Ecomap website</h4>
                <p
                  className="bg-light p-4 rounded-3"
                  style={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  Bản đồ dữ liệu mở về các dự án môi trường của thanh niên được
                  hiển thị trực quan chia theo từng chủ đề và khu vực địa lý.
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs="auto">
                <Image src={imgBullet2} style={{ maxWidth: "80px" }} />
              </Col>
              <Col>
                <h4>Ecomap training</h4>
                <p
                  className="bg-light p-4 rounded-3"
                  style={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  Cung cấp các khóa học từ cơ bản đến nâng cao về kiến thức
                  triển khai và xây dựng một dự án cộng đồng. Tại đây, trao cho
                  thanh niên cơ hội được học tập bình đẳng bất kể bạn là ai, ở
                  đâu cũng có cơ hội để tham gia vào các hoạt động ý nghĩa.
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs="auto">
                <Image src={imgBullet3} style={{ maxWidth: "80px" }} />
              </Col>
              <Col>
                <h4>Ecomap stories</h4>
                <p
                  className="bg-light p-4 rounded-3"
                  style={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  Tổng hợp chuỗi các câu chuyện truyền cảm hứng được ghi lại một
                  cách chân thực từ các dự án trên cả nước. Qua đây, các bạn trẻ
                  có thể học hỏi kinh nghiệm lẫn nhau từ những mô hình đã triển
                  khai thực tế.
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
