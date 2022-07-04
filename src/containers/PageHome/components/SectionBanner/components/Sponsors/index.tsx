import * as React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { BrandsProps, IBrand } from "../../types";

const Brand = (props: IBrand) => {
  const { name, logo } = props;
  return (
    <Card
      style={{
        borderRadius: "13px",
      }}
    >
      <Card.Body className="py-0 p-sm-3">
        <Image
          width="100%"
          height="100px"
          src={logo}
          title={name}
          style={{
            objectFit: "contain",
          }}
        />
      </Card.Body>
    </Card>
  );
};

const Sponsors = (props: BrandsProps) => {
  const { data } = props;
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Đơn vị tài trợ</h4>
        <span></span>
      </div>
      <Row className="mt-1 gx-1 gy-1 gx-md-3 gy-md-3">
        {data.map((brand: any, idx: number) => (
          <Col key={idx} xs={4}>
            <Brand {...brand} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Sponsors;
