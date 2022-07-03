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
            <h4 className="fw-light">
              Cổng kết nối các dự án tạo tác động xã hội về lĩnh vực môi trường
              của của thanh niên Việt Nam
            </h4>
          </div>
        </div>
        <Sponsors data={listBrands} />
      </div>
    </Container>
  );
};

export default About;
