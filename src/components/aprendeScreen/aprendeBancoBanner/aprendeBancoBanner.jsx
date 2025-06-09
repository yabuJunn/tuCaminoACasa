import "./bancoBanner.css"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"
import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerImg from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerBanco.svg"

export const AprendeBancoBanner = () => {
  return (
    <div className="bannerAprendeBanco" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="bannerOverlay">
        <div className="topBar">
          <img src={iconBack} alt="Volver" className="backIcon" />
          <UpperNavButtons/>
        </div>

        <div className="breadcrumbText">
          <span className="breadcrumb">Aprende &gt;</span>
          <span className="titulo"> Trámite con el banco</span>
        </div>
      </div>

      <img src={bannerImg} alt="bannerImg" className="bgBanner" />
      <img src={iconBack} alt="iconBack" className="backIcon" />


    </div>
  )
}

