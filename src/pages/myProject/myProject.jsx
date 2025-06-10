import "./myProject.css";

import { Header } from "../../components/myProjectScreen/Header/Header";
import { ProjectDescription } from "../../components/myProjectScreen/ProjectDescription/ProjectDescription";
import { ProjectMap } from "../../components/myProjectScreen/ProjectMap/ProjectMap";
import { CommonAreas } from "../../components/myProjectScreen/CommonAreas/CommonAreas";
import { ProjectDetails } from "../../components/myProjectScreen/ProjectDetails/ProjectDetails";
import { GlobalNavBar } from "../../components/navigation/globalNavBar/globalNavBar";
import { UpperNavButtons } from "../../components/navigation/upperNavButtons/upperNavButtons";
import { BotComponente } from "../../components/botonesChatScreen/botComponente/botComponente";

export function MyProject() {
  return (
    <div>
      <GlobalNavBar />
      <div className="my-project">

        <Header />
        <UpperNavButtons />
        <main className="content">
          <ProjectDescription />
          {/* <CommonAreas /> */}
          <ProjectDetails />
          {/* <ProjectMap /> */}
        </main>
      </div>
      <BotComponente/>
    </div>
  );
}
