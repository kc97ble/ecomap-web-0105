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
      className="pt-2 pb-5"
      fluid={true}
      style={{ backgroundColor: "#EBF8FF" }}
    >
      <Container>
        <Row className="my-2">
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <h3 className="fw-bold my-2 text-center">Đội ngũ cố vấn</h3>
          </Col>
        </Row>
        <Row className="align-items-start">
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgNguyenDucVinh}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">ThS. Nguyễn Đức Vinh</h6>
            <div className="text-center fw-light">Cố vấn chuyên môn</div>
            <div className="text-center fw-light">Giám đốc STG</div>
          </Col>
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgNguyenHongLong}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">ThS. Nguyễn Hồng Long</h6>
            <div className="text-center fw-light">Cố vấn chuyên môn</div>
            <div className="text-center fw-light">Giám đốc CCS</div>
          </Col>
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgTranLuongSon}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">TS. Trần Lương Sơn</h6>
            <div className="text-center fw-light">Cố vấn chuyên môn</div>
            <div className="text-center fw-light">
              Founder VietSoftware International
            </div>
          </Col>
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgHieuPc}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Ngô Minh Hiếu</h6>
            <div className="text-center fw-light">Cố vấn công nghệ</div>
          </Col>
          <Col className="my-2 d-flex flex-column justify-content-center align-items-center">
            <Image
              src={imgNguyenTienTrungKien}
              width="180px"
              height="180px"
              roundedCircle={true}
              rounded={true}
              style={{ objectFit: "cover" }}
            />
            <h6 className="text-center mt-2">Nguyễn Tiến Trung Kiên</h6>
            <div className="text-center fw-light">Cố vấn công nghệ</div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
