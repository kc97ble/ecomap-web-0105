import * as React from "react";
import { Carousel } from "react-bootstrap";

import imgCarouselBg from "../../assets/imgCarouselBg.png";

/**
 * @deprecated
 * Use `TheBanner` instead
 */
export default function TheCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarouselBg} alt="First slide" />
        <Carousel.Caption>
          <h3>ECOMAP</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
