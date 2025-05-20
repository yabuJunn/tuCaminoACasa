import "./CommonAreas.css";

import BathArea from '../../assets/svg/bathArea.svg';
import GameArea from '../../assets/svg/gameArea.svg';
import GymArea from '../../assets/svg/gymArea.svg';
import PathArea from '../../assets/svg/pathArea.svg';
import PicnicArea from '../../assets/svg/picnicArea.svg';
import PoolArea from '../../assets/svg/poolArea.svg';

export function CommonAreas() {
  const amenities = [
    BathArea,
    GameArea,
    GymArea,
    PathArea,
    PicnicArea,
    PoolArea,
  ];

  return (
    <section className="common-areas">
      <h3>Zonas comunes</h3>
      <div className="amenities-carousel">
        {amenities.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Amenidad ${index + 1}`}
            className="amenity-icon"
          />
        ))}
      </div>
    </section>
  );
}
