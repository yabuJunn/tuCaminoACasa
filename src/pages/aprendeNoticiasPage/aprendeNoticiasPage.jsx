import { AprendeNoticiasBanner } from "../../components/aprendeNoticiasBanner/aprendeNoticiasBanner"
import { DescripcionNoticias } from "../../components/descripcionNoticias/descripcionNoticias"

export const AprendeNoticiasPage = () => {
    return<>

    <section className="aprendeNoticiasPage">

    
        <div className="bannerAprendeNoticias">
        <AprendeNoticiasBanner></AprendeNoticiasBanner>
        </div>
        
        <div className="descripcionNoticias">
        <DescripcionNoticias></DescripcionNoticias>

        



        </div>

    </section>
    </>
}