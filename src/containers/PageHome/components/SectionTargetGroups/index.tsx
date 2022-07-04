import * as React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import imgTargetGroup1 from "./assets/imgTargetGroup1.png";
import imgTargetGroup2 from "./assets/imgTargetGroup2.png";
import imgTargetGroup3 from "./assets/imgTargetGroup3.png";
import imgTargetGroup4 from "./assets/imgTargetGroup4.png";

export default function SectionTargetGroups() {
  return (
    <Container
      className="bg-dark py-5"
      fluid={true}
      style={{ backgroundColor: "#1A202C !important" }}
    >
      <Container className="text-white" fluid="sm">
        <Row>
          <Col>
            <h3 className="fw-bold my-3">Các nhóm đối tượng của dự án</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Image
              className="my-2 d-none d-sm-block"
              src={imgTargetGroup1}
              style={{ maxWidth: "80px" }}
            />
            <h4>Vận hành dự án</h4>
            <p>
              Những thủ lĩnh thanh niên, chủ nhiệm câu lạc bộ, điều phối dự án
              cộng đồng về lĩnh vực môi trường trên toàn quốc
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Image
              className="my-2 d-none d-sm-block"
              src={imgTargetGroup2}
              style={{ maxWidth: "80px" }}
            />
            <h4>Thanh niên</h4>
            <p>
              Những người trẻ từ 18 đến 30 tuổi quan tâm về các hoạt động môi
              trường và tình nguyện
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Image
              className="my-2 d-none d-sm-block"
              src={imgTargetGroup3}
              style={{ maxWidth: "80px" }}
            />
            <h4>Tổ chức cộng đồng</h4>
            <p>
              Các tổ chức địa phương, tổ chức phi chính phủ, tổ chức xã hội …
              hoạt động về lĩnh vực môi trường
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Image
              className="my-2 d-none d-sm-block"
              src={imgTargetGroup4}
              style={{ maxWidth: "80px" }}
            />
            <h4>Báo chí</h4>
            <p>
              Đơn vị báo chí trong nước có chuyên mục tin tức viết về các hoạt
              động tình nguyện của thanh niên đặc biệt là môi trường
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
