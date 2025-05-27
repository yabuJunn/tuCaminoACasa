import iconBack from "../../assets/svgIconsAprende/iconBack.svg"
import bannerRegistro from "../../assets/ImgBannerAprende/bannerRegistro.svg"


export const AprendeRegistroBanner = () => {
    return<>

        <div className="bannerAprendeRegistro">
        <img src={iconBack} alt="iconBack" />

        <img src={bannerRegistro} alt="bannerRegistro" />

         <div className="breadCrumb">
        <span className="page">Aprende</span>
        <span className="separator">&gt;</span>
        <span className="subPage">Registro de la escritura</span>
      </div>

        </div>


    </>
}