import "./projectSelector.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProjectSelected } from "../../../store";

export const ProjectSelector = () => {
    const dispatch = useDispatch();

    // Traer proyectos desde Redux
    const projects = useSelector((state) => state.main.projects);

    // Estado local para mostrar en el botón desplegable
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);

    // Seleccionar el primero automáticamente cuando lleguen los proyectos
    useEffect(() => {
        if (projects.length > 0 && selected === null) {
            const defaultProject = projects[0];
            setSelected(defaultProject);
            dispatch(setProjectSelected(defaultProject.id));
        }
    }, [projects, selected, dispatch]);

    const handleSelect = (project) => {
        setSelected(project);
        dispatch(setProjectSelected(project.id));
        setOpen(false);
    };

    return (
        <div className="project-selector">
            <button className="selector-button" onClick={() => setOpen(!open)}>
                <div className="selector-text">
                    <span className="project-name">{selected?.name || "Proyecto"}</span>
                    <span className="project-type">{selected?.type || ""}</span>
                </div>
                <span className="chevron">&#9662;</span>
            </button>

            {open && (
                <div className="selector-options">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="option"
                            onClick={() => handleSelect(project)}
                        >
                            <span className="project-name-option">{project.name}</span><br />
                            <span className="project-type-option">{project.type}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
