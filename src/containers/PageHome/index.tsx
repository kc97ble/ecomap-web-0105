import * as React from "react";
import TheNavbar from "../../components/TheNavbar";
import TheBanner from "./components/SectionBanner";
import SectionFooter from "./components/SectionFooter";
import SectionIntro from "./components/SectionIntro";
import SectionMainActivity from "./components/SectionMainActivity";
import SectionSubscription from "./components/SectionSubscription";
import SectionTargetGroups from "./components/SectionTargetGroups";
import SectionTeamIntro1 from "./components/SectionTeamIntro1";
import SectionTeamIntro2 from "./components/SectionTeamIntro2";

export function PageHome() {
  return (
    <div>
      <TheNavbar />
      <TheBanner />
      <SectionIntro />
      <SectionMainActivity />
      <SectionTargetGroups />
      <SectionTeamIntro1 />
      <SectionTeamIntro2 />
      <SectionSubscription />
      <SectionFooter />
    </div>
  );
}
