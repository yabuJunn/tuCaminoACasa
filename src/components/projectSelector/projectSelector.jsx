import "./projectSelector.css";

import { useState } from "react";

const projects = [
    { name: "Violet", type: "Apartamento" },
    { name: "Pance Nativo", type: "Casa" }
];

export const ProjectSelector = () => {
    const [selected, setSelected] = useState(projects[0]);
    const [open, setOpen] = useState(false);

    return (
        <div className="project-selector">
            <button className="selector-button" onClick={() => setOpen(!open)}>
                <div className="selector-text">
                    <span className="project-name">{selected.name}</span>
                    <span className="project-type">{selected.type}</span>
                </div>
                <span className="chevron">&#9662;</span> {/* Unicode ▼ */}
            </button>

            {open && (
                <div className="selector-options">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="option"
                            onClick={() => {
                                setSelected(project);
                                setOpen(false);
                            }}
                        >
                            <span className="project-name-option ">{project.name}</span><br/>
                            <span className="project-type-option ">{project.type}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
