import * as React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import imgHieuPc from "./assets/imgHieuPc.jpg";
import imgNguyenDucVinh from "./assets/imgNguyenDucVinh.jpg";
import imgNguyenHongLong from "./assets/imgNguyenHongLong.jpg";
import imgNguyenTienTrungKien from "./assets/imgNguyenTienTrungKien.jpg";
import imgTranLuongSon from "./assets/imgTranLuongSon.jpg";

export default function SectionTeamIntro2() {
  return (
    <Container
      className="py-5"
      fluid={true}
      style={{ backgroundColor: "#EBF8FF" }}
    >
      <Container>
        <Row className="my-2">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="fw-bold my-2 text-center">Đội ngũ cố vấn</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgNguyenDucVinh}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Nguyễn Đức Vinh</h6>
            <p className="text-center" style={{ fontWeight: "300" }}>
              Cố vấn chuyên môn
            </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgNguyenHongLong}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Nguyễn Hồng Long</h6>
            <p className="text-center" style={{ fontWeight: "300" }}>
              Cố vấn chuyên môn
            </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgTranLuongSon}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Trần Lương Sơn</h6>
            <p className="text-center" style={{ fontWeight: "300" }}>
              Cố vấn chuyên môn
            </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgHieuPc}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Hiếu PC</h6>
            <p className="text-center" style={{ fontWeight: "300" }}>
              Cố vấn công nghệ
            </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgNguyenTienTrungKien}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Nguyễn Tiến Trung Kiên</h6>
            <p className="text-center fw-light">Cố vấn công nghệ</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
