import iconBack from "../../assets/svgIconsAprende/iconBack.svg"

import bannerImg from "../../assets/ImgBannerAprende/bannerBanco.svg"


export const AprendeBancoBanner = () => {
    return<>

    <section className="aprendeBancoPage">
        <div className="bannerAprendeBanco">
        <img src={iconBack} alt="iconBack" />

        <img src={bannerImg} alt="bannerImg" />

         <div className="breadCrumb">
        <span className="page">Aprende</span>
        <span className="separator">&gt;</span>
        <span className="subPage">Trámite con el banco</span>
      </div>

        </div>

    </section>
    </>
}