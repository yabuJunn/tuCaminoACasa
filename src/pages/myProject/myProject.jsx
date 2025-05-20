import { Header } from "../../components/Header/Header";
import { ProjectDescription } from "../../components/ProjectDescription/ProjectDescription";
import { ProjectMap } from "../../components/ProjectMap/ProjectMap";
import { CommonAreas } from "../../components/CommonAreas/CommonAreas";
import { ProjectDetails } from "../../components/ProjectDetails/ProjectDetails";

export default function MyProject() {
  return (
    <div className="my-project">
      <Header />
      <main className="content">
        <ProjectDescription />
        <ProjectDetails />
        <CommonAreas />
        <ProjectMap />
      </main>
    </div>
  );
}
