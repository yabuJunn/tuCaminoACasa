import "./ProjectDetails.css";

import { useSelector } from "react-redux";
import { fallbackProject } from "../../../utils/fallbakcProject";

import RoomImage from "../../../assets/png/myProjectScreen/RoomImage.png";
import buildingIcon from "../../../assets/svg/myProjectScreen/BuildIcon.svg";
import Viñeta from "../../../assets/svg/myProjectScreen/Viñeta.svg";

export function ProjectDetails() {
  const selectedProjectId = useSelector((state) => state.main.projectSelected);
  const allProjects = useSelector((state) => state.main.projects || []);

  const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

  // Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
  const project = selectedProject || fallbackProject;

  const availableExtras = Object.entries(project.elements_extra || {})
    .filter(([_, value]) => value === true)
    .map(([key]) => key);

  return (
    <section className="project-details">

      <div className="Proyect-Info">

        <div id="propertyProjectDetailsTitleIcon">
          <h3>Detalles del proyecto</h3>
          <img src={buildingIcon} alt="Icono edificio" />
        </div>

        <p>Área privada construida total 77,70m²</p>

        <div className="projectElementsList">
          {availableExtras.map((element, index) => (
            <div key={index} className="propertyProjectDetailsDescriptionElement">
              <img src={Viñeta} alt="Viñeta" />
              <p>{element}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="ProjectElements">
        <div className="projectElementsImage">
          <img src={project.floor_plan_image || RoomImage} alt="Plano del proyecto" />
        </div>

      </div>
    </section>
  );
}