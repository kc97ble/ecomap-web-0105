import * as React from "react";
import { Container, Image } from "react-bootstrap";
import imgBanner from "../../assets/banner.png";

const Banner = () => {
  return (
    <Container>
      <Image
        src={imgBanner}
        width="100%"
        height="500px"
        style={{
          borderRadius: "35px",
          objectFit: "cover",
        }}
        className="d-none d-xl-block"
      />
    </Container>
  );
};

export default Banner;
