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
      <Card.Body>
<<<<<<< HEAD
        <Image
          width="100%"
          height="100px"
          src={logo}
          title={name}
          style={{
            objectFit: "contain",
          }}
        />
=======
        <Image width="100%" height="100px" src={logo} title={name} />
>>>>>>> 1c9b6015dd95b6b4620eeb4048bd81df30012b62
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
      <Row className="mt-1 gx-3 gy-3">
        {data.map((brand: any, idx: number) => (
          <Col key={idx} xs={6} sm={4}>
            <Brand {...brand} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Sponsors;
