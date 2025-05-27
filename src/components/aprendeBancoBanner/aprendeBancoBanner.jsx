import iconBack from "../../assets/svgIconsAprende/iconBack.svg"
import bannerImg from "../../assets/ImgBannerAprende/bannerBanco.svg"
import "./bancoBanner.css"

export const AprendeBancoBanner = () => {
  return (
    <div className="bannerAprendeBanco">

      <div className="breadCrumb">
        <span className="page">Aprende</span>
        <span className="separator">&gt;</span>
        <span className="subPage">Trámite con el banco</span>
      </div>

      <img src={bannerImg} alt="bannerImg" className="bgBanner" />
      <img src={iconBack} alt="iconBack" className="backIcon" />


    </div>
  )
}
