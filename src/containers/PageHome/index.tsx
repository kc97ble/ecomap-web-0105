import * as React from "react";
import TheNavbar from "../../components/TheNavbar";
import TheBanner from "./components/SectionBanner";
import SectionIntro from "./components/SectionIntro";
import SectionMainActivity from "./components/SectionMainActivity";
import SectionTargetGroups from "./components/SectionTargetGroups";

export function PageHome() {
  return (
    <div>
      <TheNavbar />
      <TheBanner />
      <SectionIntro />
      <SectionMainActivity />
      <SectionTargetGroups />
    </div>
  );
}
