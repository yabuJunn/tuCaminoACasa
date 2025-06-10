import "./ProjectMap.css";

import { useSelector } from "react-redux";
import { fallbackProject } from "../../../utils/fallbakcProject";

import SiteMapImage from "../../../assets/png/myProjectScreen/PlanoAereo.png";
import PoolIcon from '../../../assets/svg/myProjectScreen/poolArea2.svg';
import SalonIcon from '../../../assets/svg/myProjectScreen/salonArea.svg';
import MascotasIcon from '../../../assets/svg/myProjectScreen/mascotasArea.svg';
import LobbyIcon from '../../../assets/svg/myProjectScreen/lobbyArea.svg';
import BasurasIcon from '../../../assets/svg/myProjectScreen/basuraArea.svg';
import PicnicIcon from '../../../assets/svg/myProjectScreen/picnicArea2.svg';
import JuegosIcon from '../../../assets/svg/myProjectScreen/juegosArea.svg';
import GymIcon from '../../../assets/svg/myProjectScreen/gymArea2.svg';

export function ProjectMap() {

  const selectedProjectId = useSelector((state) => state.main.projectSelected);
  const allProjects = useSelector((state) => state.main.projects || []);

  const selectedProject = allProjects.find((p) => p.id === selectedProjectId);

  // Usamos el proyecto seleccionado si existe, si no usamos el de respaldo
  const project = selectedProject || fallbackProject;

  const amenities = [
    { name: "Portería con Lobby", icon: LobbyIcon },
    { name: "Salón social", icon: SalonIcon },
    { name: "Piscina niños y adultos", icon: PoolIcon },
    { name: "Unidad técnica de basuras", icon: BasurasIcon },
    { name: "Zona picnic", icon: PicnicIcon },
    { name: "Juegos infantiles", icon: JuegosIcon },
    { name: "Gimnasio dotado", icon: GymIcon },
    { name: "Parque para mascotas", icon: MascotasIcon },
  ];

  return (
    <section className="project-map-container">
      <div className="map-column">
        <div className="project-map">
          <img src={project.floor_plan_image || SiteMapImage} alt="Mapa del proyecto" />
        </div>
      </div>
      <div className="amenities-column">
        <div className="amenities-list">
          {amenities.map((item, index) => (
            <div key={index} className="amenity-row">
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
