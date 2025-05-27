import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerRegistro from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerRegistro.svg"


export const AprendeNoticiasBanner = () => {
  return <>

    <div className="bannerAprendeNoticias">
      <img src={iconBack} alt="iconBack" />

      <img src={bannerRegistro} alt="bannerNoticias" />

      <div className="breadCrumb">
        <span className="page">Aprende</span>
        <span className="separator">&gt;</span>
        <span className="subPage">Noticias</span>
      </div>

    </div>


  </>
}