import * as React from "react";
import { Container } from "react-bootstrap";
import { listBrands } from "../../constants";
import Sponsors from "../Sponsors";

const About = () => {
  return (
    <Container className="h-100">
      <div className="d-flex flex-column h-100">
        <div className="flex-grow-1">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="text-primary fw-bolder">ECOMAP</h1>
            <h5 className="fw-light">
              Mạng lưới sáng kiến môi trường cho người Việt trẻ
            </h5>
          </div>
        </div>
        <Sponsors data={listBrands} />
      </div>
    </Container>
  );
};

export default About;
