import { BRAND_LOGO } from "./constants";

export interface IBrand {
  name: string;
  logo: any;
  url: string;
}

export interface BrandsProps {
  data?: IBrand[];
}
