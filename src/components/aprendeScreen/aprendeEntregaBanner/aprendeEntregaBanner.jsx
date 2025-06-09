import iconBack from "../../../assets/svg/aprendeScreen/svgIconsAprende/iconBack.svg"
import bannerEntrega from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerEntrega.svg"
import "./aprendeEntregaBanner.css"

export const AprendeEntregaBanner = () => {
  return <>

    <div className="bannerEntregaFirma">
      <img src={iconBack} alt="iconBack" />

      <img src={bannerEntrega} alt="bannerFirma" />

      <div className="breadCrumb">
        <span className="page">Aprende</span>
        <span className="separator">&gt;</span>
        <span className="subPage">Entrega del inmueble</span>
      </div>

    </div>


  </>
}