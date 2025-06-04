import "./bancoBanner.css"

import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerImg from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerBanco.svg"

export const AprendeBancoBanner = () => {
  return (
    <div className="bannerAprendeBanco">

      <img src={bannerImg} alt="bannerImg" className="bgBanner" />
      <img src={iconBack} alt="iconBack" className="backIcon" />

      <div className="breadCrumb">
        <span className="page">Aprende</span>
        <span className="separator">&gt;</span>
        <span className="subPage">Trámite con el banco</span>
      </div>

    </div>
  )
}
