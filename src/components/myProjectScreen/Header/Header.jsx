//import "./Header.css";

import BannerImage from "../../../assets/jpg/BannerViolet.jpg";
import ProfileImage from "../../../assets/jpg/ProfileViolet.jpg";

export function Header() {
  return (
    <header className="header">
      <div className="banner">
        <img src={BannerImage} alt="Banner del sitio" className="banner-image" />
      </div>
        <div className="user-profile">
          <img src={ProfileImage} alt="Foto de perfil" className="profile-pic" />
        </div>
    </header>
  );
}
