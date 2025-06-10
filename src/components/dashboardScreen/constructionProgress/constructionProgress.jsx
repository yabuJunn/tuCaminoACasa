import "./constructionProgress.css"

import {
    CircularProgressbar,
    buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from "react-redux";
import { fallbackProject } from "../../../utils/fallbakcProject";

export const ConstructionProgress = () => {

    const selectedProjectId = useSelector((state) => state.main.projectSelected);
    const allProjects = useSelector((state) => state.main.projects || []);

    const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

    // Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
    const project = selectedProject || fallbackProject;

    return <>
        <div id="constructionProgressContainer">
            <h2>Progreso de la construcción</h2>

            <CircularProgressbar
                value={project.constructionPercentage}
                maxValue={100}
                text={`${project.constructionPercentage}%`}
                styles={buildStyles({
                    rotation: 0.75,
                    strokeLinecap: 'round',
                    trailColor: '#d6d6d6',
                    pathColor: '#2F80ED',
                    textColor: '#000',
                })}
                circleRatio={0.5}
                style={{ width: '100%', height: '100%' }}
            />

            <div id="constructionProgressProgressText">
                <div id="constructionProgressProgressTextTitle">
                    <h3>Etapa actual</h3>
                    <p>{project.constructionPhase}</p>
                </div>

                <button id="constructionProgressNextStageButton">
                    {"Próximo paso"}
                </button>
            </div>
        </div >
    </>
}