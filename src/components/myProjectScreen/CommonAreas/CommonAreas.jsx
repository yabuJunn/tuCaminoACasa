import "./CommonAreas.css";

import BathArea from '../../../assets/svg/myProjectScreen/bathArea.svg';
import GameArea from '../../../assets/svg/myProjectScreen/gameArea.svg';
import GymArea from '../../../assets/svg/myProjectScreen/gymArea.svg';
import PathArea from '../../../assets/svg/myProjectScreen/pathArea.svg';
import PicnicArea from '../../../assets/svg/myProjectScreen/picnicArea.svg';
import PoolArea from '../../../assets/svg/myProjectScreen/poolArea.svg';

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
