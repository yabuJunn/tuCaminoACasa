import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerEntrega from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerEntrega.svg"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"
import "./entregaBanner.css"

export const AprendeEntregaBanner = () => {
  return (
    <div className="bannerAprendeEntrega" style={{ backgroundImage: `url(${bannerEntrega})` }}>
      <div className="bannerOverlay">
        <div className="topBar">
          <img src={iconBack} alt="Volver" className="backIcon" />
          <UpperNavButtons />
        </div>

        <div className="breadcrumbText">
          <span className="breadcrumb">Aprende &gt;</span>
          <span className="titulo">Entrega del inmueble</span>
        </div>
      </div>
    </div>
  );
};
