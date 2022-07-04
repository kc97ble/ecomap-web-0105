import * as React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import imgPhuongTrang from "./assets/imgPhuongTrang.jpg";
import imgMinhTam from "./assets/imgMinhTam.jpg";
import imgThanhThuy from "./assets/imgThanhThuy.jpg";

export default function SectionTeamIntro1() {
  return (
    <Container
      className="pt-5 pb-2"
      fluid={true}
      style={{ backgroundColor: "#EBF8FF" }}
    >
      <Container>
        <Row className="my-2">
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <h3 className="fw-bold my-2 text-center">Đội ngũ nhân sự</h3>
            <p className="text-center fw-light" style={{ maxWidth: "600px" }}>
              Dự án được xây dựng bởi nhiều người trẻ nhiệt huyết với nhiều năm
              kinh nghiệm hoạt động trong những dự án cộng đồng.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgPhuongTrang}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Vương Hoàng Phương Trang</h6>
            <p className="text-center" style={{ fontWeight: "300" }}>
              Điều phối dự án
            </p>
          </Col>
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgMinhTam}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Lê Minh Tâm</h6>
            <p className="text-center fw-light">Vận hành công nghệ</p>
          </Col>
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgThanhThuy}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Nguyễn Thanh Thủy</h6>
            <p className="text-center" style={{ fontWeight: "300" }}>
              Vận hành truyền thông
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
