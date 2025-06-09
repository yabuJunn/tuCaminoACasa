import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerFirma from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerFirma.svg"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"
import "./aprendeFirmaBanner.css"

export const AprendeFirmaBanner = () => {
  return (
    <div className="bannerAprendeFirma" style={{ backgroundImage: `url(${bannerFirma})` }}>
      <div className="bannerFirmaOverlay">
        <div className="firmaTopBar">
          <img src={iconBack} alt="Volver" className="firmaBackIcon" />
          <UpperNavButtons />
        </div>

        <div className="firmaBreadcrumbText">
          <span className="breadcrumb">Aprende &gt;</span>
          <span className="breadcrumbHighlight">Firma de la escritura</span>
        </div>
      </div>
    </div>
  )
}
