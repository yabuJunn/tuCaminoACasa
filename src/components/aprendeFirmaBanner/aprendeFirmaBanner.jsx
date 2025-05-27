import iconBack from "../../assets/svgIconsAprende/iconBack.svg"
import bannerFirma from "../../assets/ImgBannerAprende/bannerFirma.svg"


export const AprendeFirmaBanner = () => {
    return<>

        <div className="bannerAprendeFirma">
        <img src={iconBack} alt="iconBack" />

        <img src={bannerFirma} alt="bannerFirma" />

         <div className="breadCrumb">
        <span className="page">Aprende</span>
        <span className="separator">&gt;</span>
        <span className="subPage">Firma de la escritura</span>
      </div>

        </div>


    </>
}