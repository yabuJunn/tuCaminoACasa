import "./propertySummary.css";
import ProjectCardImage from "../../assets/svg/ProjectCard.svg"; 

const projectMock = {
  title: "Violet",
  location: "Sur de Cali",
  type: "Apartamento",
  class: "1",
  state: "Obra Gris",
  size: "88,00 m2"
};

export const PropertySummmary = () => {
  return (
    <div className="propertySummaryContainer">
      <img
        id="propertySummaryImageBackground"
        src={ProjectCardImage}
        alt="Vista del proyecto Violet"
      />

      <div id="propertySummaryTextTitle">
        <h2>{projectMock.title}</h2>
        <p>{projectMock.location}</p>
      </div>

      <div id="propertySummaryTextDescription">
        <div>
          <h3>{projectMock.type} tipo {projectMock.class}</h3>
          <h4>{projectMock.state}</h4>
          <p>{projectMock.size}</p>
        </div>

        <button id="propertySummaryViewMoreButton">
          {"Ver más >"}
        </button>
      </div>
    </div>
  );
};
