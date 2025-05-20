import "./myProject.css";

import { Header } from "../../components/Header/Header";
import { ProjectDescription } from "../../components/ProjectDescription/ProjectDescription";
import { ProjectMap } from "../../components/ProjectMap/ProjectMap";
import { CommonAreas } from "../../components/CommonAreas/CommonAreas";
import { ProjectDetails } from "../../components/ProjectDetails/ProjectDetails";
import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar";

export function MyProject() {
  return (
    <div>
      <GlobalNavBar />
      <div className="my-project">
        <Header />
        <main className="content">
          <ProjectDescription />
          <ProjectDetails />
          <CommonAreas />
          <ProjectMap />
        </main>
      </div>
    </div>
  );
}
