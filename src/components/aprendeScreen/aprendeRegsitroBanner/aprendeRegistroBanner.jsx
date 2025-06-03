import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerRegistro from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerRegistro.svg"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"
import "./registroBanner.css"

export const AprendeRegistroBanner = () => {
  return (
    <div className="bannerAprendeRegistro" style={{ backgroundImage: `url(${bannerRegistro})` }}>
      <div className="bannerOverlay">
        <div className="topBar">
          <img src={iconBack} alt="Volver" className="backIcon" />
          <UpperNavButtons />
        </div>

        <div className="breadcrumbText">
          <span className="breadcrumb">Aprende &gt;</span>
          <span className="titulo"> Registro de la escritura</span>
        </div>
      </div>
    </div>
  )
}
