import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerRegistro from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerNoticias.svg"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"
import "./noticiasBanner.css"

export const AprendeNoticiasBanner = () => {
  return (
    <div className="bannerAprendeNoticias">
      <div className="bannerOverlayNoticias">
        <div className="topBarNoticias">
          <img src={iconBack} alt="Volver" className="backIconNoticias" />
          <UpperNavButtons />
        </div>

        <div className="breadcrumbTextNoticias">
          <span className="breadcrumb">Aprende &gt;</span>
          <span className="titulo"> Noticias</span>
        </div>
      </div>
    </div>
  )
}
