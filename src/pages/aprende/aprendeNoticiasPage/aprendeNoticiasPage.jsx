import { AprendeNoticiasBanner } from "../../../components/aprendeScreen/aprendeNoticiasBanner/aprendeNoticiasBanner"
import { DescripcionNoticias } from "../../../components/aprendeScreen/descripcionNoticias/descripcionNoticias"
import { MasNoticiasAprende } from "../../../components/aprendeScreen/masNoticiasAprende/masnNoticiasAprende"

import { GlobalNavBar } from "../../../components/navigation/globalNavBar/globalNavBar"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"


import bannerAprendeNoticias from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerAprendeNoticias.svg"

export const AprendeNoticiasPage = () => {
    return <>

        <section className="aprendeNoticiasPage">
            <GlobalNavBar></GlobalNavBar>
            <UpperNavButtons></UpperNavButtons>



            <div className="bannerAprendeNoticias">
                <AprendeNoticiasBanner></AprendeNoticiasBanner>
            </div>

            <div className="descripcionNoticias">
                <DescripcionNoticias></DescripcionNoticias>
            </div>

            <div className="masNoticiasSesion">
                <MasNoticiasAprende></MasNoticiasAprende>
            </div>

            <img src={bannerAprendeNoticias} alt="bannerAprendeNoticias" />



        </section>
    </>
}