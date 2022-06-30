import * as React from "react";
import { Container, Image } from "react-bootstrap";

import imgBanner from "../../assets/imgBanner.png";

export default function TheBanner() {
  return (
    <Container>
      <Image src={imgBanner} rounded={true} width="100%" />
    </Container>
  );
}
