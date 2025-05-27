import "./ProjectDetails.css";

import RoomImage from "../../../assets/png/myProjectScreen/RoomImage.png";
import buildingIcon from "../../../assets/svg/myProjectScreen/BuildIcon.svg";
import Viñeta from "../../../assets/svg/myProjectScreen/Viñeta.svg";

export function ProjectDetails() {
  const projectElements = [
    "Cocina",
    "Alcoba 1",
    "Sala Comedor",
    "Estudio",
    "Terraza",
    "Baño alcoba principal",
    "Baño alcobas",
    "Vestier",
    "Espacio flexible",
    "Zona de ropas",
    "Balcón"
  ];



  return (
    <section className="project-details">

      <div className="Proyect-Info">

      <div id="propertyProjectDetailsTitleIcon">
        <h3>Detalles del proyecto</h3>
        <img src={buildingIcon} alt="Icono edificio" />
      </div>

      <p>Área privada construida total 77,70m²</p>

        <div className="projectElementsList">
          {projectElements.map((element, index) => (
            <div key={index} className="propertyProjectDetailsDescriptionElement">
              <img src={Viñeta} alt="Viñeta" /> 
              <p>{element}</p>
            </div>
          ))}
        </div>
        </div>

        <div id="ProjectElements">
                  <div className="projectElementsImage">
            <img src={RoomImage} alt="Plano del proyecto" />
          </div>
          
      </div>
    </section>
  );
}