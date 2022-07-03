import { IBrand } from "./types";

import LOGO_CVBLUE from "./assets/brands/cvblue.png";
import LOGO_USUSEMBASSY from "./assets/brands/usembassy.png";
import LOGO_YSEALI from "./assets/brands/yseali.png";

export enum BRAND_LOGO {
  US_USEMBASSY = LOGO_USUSEMBASSY,
  CV_BLUE = LOGO_CVBLUE,
  YSEALI = LOGO_YSEALI,
}

export const listBrands: IBrand[] = [
  {
    name: "US Usembassy",
    url: "#us_usembassy",
    logo: BRAND_LOGO.US_USEMBASSY,
  },
  {
    name: "CVBLUE",
    url: "#cv_blue",
    logo: BRAND_LOGO.CV_BLUE,
  },
  {
    name: "YSEALI",
    url: "#yseali",
    logo: BRAND_LOGO.YSEALI,
  },
];
