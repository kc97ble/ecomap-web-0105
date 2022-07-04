import * as React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import imgLogoEcomap05 from "./assets/imgLogoEcomap05.png";
import "./index.scss";

export default function SectionFooter() {
  return (
    <Container className="bg-dark p-4" fluid={true}>
      <Container className="text-white">
        <Row>
          <Col xs="auto">
            <Image src={imgLogoEcomap05} width="280px" />
          </Col>
          <Col>
            <div className="my-4 pb-5 border-bottom border-white">
              <a href="#" className="me-4 text-white underline-on-hover-only">
                Trang chủ
              </a>
              <a href="#" className="me-4 text-white underline-on-hover-only">
                Bản đồ
              </a>
              <a href="#" className="me-4 text-white underline-on-hover-only">
                Đào tạo
              </a>
              <a href="#" className="me-4 text-white underline-on-hover-only">
                Tin tức
              </a>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <a
                href="mailto:ecomap.vn@gmail.com"
                className="text-white underline-on-hover-only fw-light"
              >
                ecomap.vn@gmail.com
              </a>
              <span>© 2022 Ecomap. All rights reserved.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
