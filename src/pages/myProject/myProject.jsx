import "./myProject.css";

import { Header } from "../../components/myProjectScreen/Header/Header";
import { ProjectDescription } from "../../components/myProjectScreen/ProjectDescription/ProjectDescription";
import { ProjectMap } from "../../components/myProjectScreen/ProjectMap/ProjectMap";
import { CommonAreas } from "../../components/myProjectScreen/CommonAreas/CommonAreas";
import { ProjectDetails } from "../../components/myProjectScreen/ProjectDetails/ProjectDetails";
import { GlobalNavBar } from "../../components/navigation/globalNavBar/globalNavBar";

export function MyProject() {
  return (
    <div>
      <GlobalNavBar />
      <div className="my-project">
        <Header />
        <main className="content">
          <ProjectDescription />
          <CommonAreas />
          <ProjectDetails />
          <ProjectMap />
        </main>
      </div>
    </div>
  );
}
