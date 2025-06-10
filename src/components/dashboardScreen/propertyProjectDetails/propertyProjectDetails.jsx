import "./propertyProjectDetails.css";

import starListIcon from "../../../assets/svg/dashboardScreen/starListIcon.svg";
import { useSelector } from "react-redux";
import { fallbackProject } from "../../../utils/fallbakcProject";

export const PropertyProjectDetails = () => {
    const selectedProjectId = useSelector((state) => state.main.projectSelected);
    const allProjects = useSelector((state) => state.main.projects || []);

    const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

    // Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
    const project = selectedProject || fallbackProject;

    const availableExtras = Object.entries(project.elements_extra || {})
        .filter(([_, value]) => value === true)
        .map(([key]) => key);

    return (
        <div id="propertyProjectDetailsContainer">
            <div id="propertyProjectDetailsTitleContainer">
                <h2>Detalles de tu Proyecto</h2>
            </div>

            <p>Área privada construida total {project.area_m2} m2</p>

            <div id="propertyProjectDetailsDescription">
                {availableExtras.map((element, index) => (
                    <div className="propertyProjectDetailsDescriptionElement" key={`${element}-${index}`}>
                        <img src={starListIcon} alt="" />
                        <p>{element}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
