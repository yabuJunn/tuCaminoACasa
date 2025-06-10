import "./ProjectDescription.css";

import { fallbackProject } from "../../../utils/fallbakcProject";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../utils/formatPrice";

import Project3D from "../../../assets/jpg/VisualizationProject3D.png";

import IconUbicacion from "../../../assets/svg/myProjectScreen/ubiIcon.svg";
import IconPrecio from "../../../assets/svg/myProjectScreen/payIcon.svg";
import IconArea from "../../../assets/svg/myProjectScreen/areaIcon.svg";
import IconEntrega from "../../../assets/svg/myProjectScreen/calendarIcon.svg";

export function ProjectDescription() {
  const selectedProjectId = useSelector((state) => state.main.projectSelected);
  const allProjects = useSelector((state) => state.main.projects || []);

  const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

  // Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
  const project = selectedProject || fallbackProject;

  return (
    <section className="project-description">
      <h2>Descripción del proyecto</h2>

      {/* {projectDescriptionParagraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))} */}

      <p>{project.description || fallbackProject.description}</p>

      <div className="project-content-wrapper">
        <div className="project-image">
          <img src={project.view3d_image || Project3D} alt="Visualización en 3D" />
        </div>

        <div className="projectElementsSide">

          <div className="info-highlights">
            <div className="highlight-card">
              <img src={IconUbicacion} alt="Icono de Ubicación" className="highlight-icon" />
              <div className="text-content">
                <p className="label">Ubicación</p>
                <p className="tipo">{project.location || fallbackProject.location}</p>
                <p className="value">{project.specific_location || fallbackProject.specific_location}</p>
              </div>
            </div>

            <div className="highlight-card">
              <img src={IconPrecio} alt="Icono de Precio desde" className="highlight-icon" />
              <div className="text-content">
                <p className="label">Precio desde</p>
                <p className="tipo">{project.type || fallbackProject.type}</p>
                <p className="value">{formatPrice(project.price_cop) || fallbackProject.price_cop}</p>
              </div>
            </div>

            <div className="highlight-card">
              <img src={IconArea} alt="Icono de Área desde" className="highlight-icon" />
              <div className="text-content">
                <p className="label">Área desde</p>
                <p className="tipo">{project.type || fallbackProject.type}</p>
                <p className="value">{project.area_m2 || fallbackProject.area_m2} m2</p>
              </div>
            </div>

            <div className="highlight-card">
              <img src={IconEntrega} alt="Icono de Entrega estimada" className="highlight-icon" />
              <div className="text-content">
                <p className="label">Entrega estimada</p>
                <p className="tipo">{project.type || fallbackProject.type}</p>
                <p className="value">{project.delivery_year || fallbackProject.delivery_year}</p>
              </div>
            </div>
          </div>

          <div className="amenities-text">
            <h4>Amenidades</h4>
            <p>
              {project.amenities || fallbackProject.amenities}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
