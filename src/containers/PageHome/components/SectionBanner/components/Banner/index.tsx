import * as React from "react";
import { Card, Container } from "react-bootstrap";
import imgBanner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <Container>
      <Card
        bg="primary"
        style={{
          height: "500px",
          borderRadius: "35px",
          background: `url(${imgBanner})`,
          backgroundSize: "100% 100%",
        }}
      ></Card>
    </Container>
  );
};

export default Banner;
