import * as React from "react";
import TheNavbar from "../../components/TheNavbar";
import SectionIntro from "./components/SectionIntro";
import SectionMainActivity from "./components/SectionMainActivity";
import SectionTargetGroups from "./components/SectionTargetGroups";
import TheBanner from "./components/TheBanner";

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
