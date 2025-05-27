import { AprendeNoticiasBanner } from "../../components/aprendeNoticiasBanner/aprendeNoticiasBanner"
import { DescripcionNoticias } from "../../components/descripcionNoticias/descripcionNoticias"
import bannerAprendeNoticias from "../../assets/ImgBannerAprende/bannerAprendeNoticias.svg"

export const AprendeNoticiasPage = () => {
    return<>

    <section className="aprendeNoticiasPage">

    
        <div className="bannerAprendeNoticias">
        <AprendeNoticiasBanner></AprendeNoticiasBanner>
        </div>
        
        <div className="descripcionNoticias">
        <DescripcionNoticias></DescripcionNoticias>
        </div>

        <div className=""></div>

        <img src={bannerAprendeNoticias} alt="bannerAprendeNoticias" />
        


    </section>
    </>
}