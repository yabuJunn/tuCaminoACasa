import "./propertySummary.css";
import { useSelector } from "react-redux";
import ProjectCardImage from "../../../assets/svg/dashboardScreen/ProjectCard.svg";
import { fallbackProject } from "../../../utils/fallbakcProject";

export const PropertySummary = () => {
  const selectedProjectId = useSelector((state) => state.main.projectSelected);
  const allProjects = useSelector((state) => state.main.projects || []);

  const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

  // Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
  const project = selectedProject || fallbackProject;

  return (
    <div
      className="propertySummaryContainer"
      style={{ backgroundImage: `url(${project.frontImage || ProjectCardImage})` }}
    >
      <div className="propertySummaryOverlay">
        <div className="propertySummaryTextTitle">
          <h2>{project.name}</h2>
          <p>{project.specific_location}</p>
        </div>

        <div className="propertySummaryTextDescription">
          <div>
            <h3>{project.type} tipo {project.class}</h3>
            <h4>{project.constructionState}</h4>
            <p>{project.area_m2} m2</p>
          </div>

          <button id="propertySummaryViewMoreButton">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};
