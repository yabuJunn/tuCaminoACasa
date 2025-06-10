import "./Header.css";

import { useSelector } from "react-redux";
import { fallbackProject } from "../../../utils/fallbakcProject";

import BannerImage from "../../../assets/jpg/BannerViolet.jpg";
import ProfileImage from "../../../assets/jpg/ProfileViolet.jpg";

export function Header() {
  const selectedProjectId = useSelector((state) => state.main.projectSelected);
  const allProjects = useSelector((state) => state.main.projects || []);

  const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

  // Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
  const project = selectedProject || fallbackProject;

  return (
    <header className="header">
      <div className="banner">
        <img src={project.frontImage || BannerImage} alt="Banner del sitio" className="banner-image" />
      </div>
      <div className="user-profile">
        <img src={project.projectLogo || ProfileImage} alt="Foto de perfil" className="profile-pic" />
      </div>
    </header>
  );
}
