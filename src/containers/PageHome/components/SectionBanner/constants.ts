import { IBrand } from "./types";

import LOGO_IDY from "./assets/brands/idy.png";

import {
  default as LOGO_BAMBOO,
  default as LOGO_YBOX,
} from "./assets/brands/ybox.png";

export enum BRAND_LOGO {
  YBOX = LOGO_YBOX,
  IDY = LOGO_IDY,
  BAMBOO = LOGO_BAMBOO,
}

export const listBrands: IBrand[] = [
  {
    name: "YBOX.VN",
    url: "ybox.vn",
    logo: BRAND_LOGO.YBOX,
  },
  {
    name: "IDY",
    url: "idy.vn",
    logo: BRAND_LOGO.IDY,
  },
  {
    name: "bamboo.VN",
    url: "bamvoo.vn",
    logo: BRAND_LOGO.BAMBOO,
  },
];
