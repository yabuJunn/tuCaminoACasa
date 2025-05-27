import { AprendeNoticiasBanner } from "../../components/aprendeNoticiasBanner/aprendeNoticiasBanner"
import { DescripcionNoticias } from "../../components/descripcionNoticias/descripcionNoticias"
import { MasNoticiasAprende } from "../../components/masNoticiasAprende/masnNoticiasAprende"

import {GlobalNavBar} from "../../components/globalNavBar/globalNavBar"
import {UpperNavButtons} from "../../components/upperNavButtons/upperNavButtons"


import bannerAprendeNoticias from "../../assets/ImgBannerAprende/bannerAprendeNoticias.svg"

export const AprendeNoticiasPage = () => {
    return<>

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