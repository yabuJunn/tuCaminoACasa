//import "./ProjectMap.css";

import SiteMapImage from "../../assets/jpg/PlanoAereo.png";
import PoolIcon from '../../assets/svgIcons/poolArea2.svg';
import SalonIcon from '../../assets/svgIcons/salonArea.svg';
import MascotasIcon from '../../assets/svgIcons/mascotasArea.svg';
import LobbyIcon from '../../assets/svgIcons/lobbyArea.svg';
import BasurasIcon from '../../assets/svgIcons/basuraArea.svg';
import PicnicIcon from '../../assets/svgIcons/picnicArea2.svg';
import JuegosIcon from '../../assets/svgIcons/juegosArea.svg';
import GymIcon from '../../assets/svgIcons/gymArea2.svg';

export function ProjectMap() {
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
          <img src={SiteMapImage} alt="Mapa del proyecto" />
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
