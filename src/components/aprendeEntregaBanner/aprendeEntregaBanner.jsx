import iconBack from "../../assets/svgIconsAprende/iconBack.svg"
import bannerEntrega from "../../assets/ImgBannerAprende/bannerEntrega.svg"


export const AprendeEntregaBanner = () => {
    return<>

        <div className="bannerAprendeFirma">
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