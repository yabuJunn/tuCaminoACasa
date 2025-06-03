import { AprendeNoticiasBanner } from "../../../components/aprendeScreen/aprendeNoticiasBanner/aprendeNoticiasBanner"
import { DescripcionNoticias } from "../../../components/aprendeScreen/descripcionNoticias/descripcionNoticias"
import { MasNoticiasAprende } from "../../../components/aprendeScreen/masNoticiasAprende/masnNoticiasAprende"
import { GlobalNavBar } from "../../../components/navigation/globalNavBar/globalNavBar"
import "./noticiasPage.css"

export const AprendeNoticiasPage = () => {
    return <>

        <section className="aprendeNoticiasPage">
            <GlobalNavBar></GlobalNavBar>


            <div className="bannerAprendeNoticias">
                <AprendeNoticiasBanner></AprendeNoticiasBanner>
            </div>

            <section className="noticiasWrapper">
                <DescripcionNoticias />
                <MasNoticiasAprende />
            </section>


        </section>
    </>
}