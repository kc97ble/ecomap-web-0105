import * as React from "react";
import TheNavbar from "../../components/TheNavbar";
import SectionIntro from "./components/SectionIntro";
import TheBanner from "./components/TheBanner";

export function PageHome() {
  return (
    <div>
      <TheNavbar />
      <TheBanner />
      <SectionIntro />
    </div>
  );
}
