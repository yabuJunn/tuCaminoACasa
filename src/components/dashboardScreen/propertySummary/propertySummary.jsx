import "./propertySummary.css";

import ProjectCardImage from "../../../assets/svg/dashboardScreen/ProjectCard.svg";

const projectMock = {
  title: "Violet",
  location: "Sur de Cali",
  type: "Apartamento",
  class: "1",
  state: "Obra gris",
  size: "88,00 m²"
};

export const PropertySummmary = () => {
  return (
    <div
      className="propertySummaryContainer"
      style={{ backgroundImage: `url(${ProjectCardImage})` }}
    >
      <div className="propertySummaryOverlay">
        <div className="propertySummaryTextTitle">
          <h2>{projectMock.title}</h2>
          <p>{projectMock.location}</p>
        </div>

        <div className="propertySummaryTextDescription">
          <div>
            <h3>{projectMock.type} tipo {projectMock.class}</h3>
            <h4>{projectMock.state}</h4>
            <p>{projectMock.size}</p>
          </div>

          <button id="propertySummaryViewMoreButton">
            Ver más &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
