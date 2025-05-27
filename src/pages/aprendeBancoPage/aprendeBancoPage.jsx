import { AprendeBancoBanner } from "../../components/aprendeBancoBanner/aprendeBancoBanner"
import { PuntosClaveBanco } from "../../components/puntosClaveBanco/puntosClaveBanco"
import { TutorialesAprendeBanco } from "../../components/tutorialesAprendeBanco/tutorialesAprendeBanco"

import { GlobalNavBar } from "../../components/GlobalNavBar/GlobalNavBar"
import { UpperNavButtons } from "../../components/upperNavButtons/upperNavButtons"



export const AprendeBancoPage = () => {
    return<>

    <section className="aprendeBancoPage">
        <GlobalNavBar></GlobalNavBar>
        <UpperNavButtons></UpperNavButtons>
        <div className="bannerAprendeBanco">
        
        <AprendeBancoBanner></AprendeBancoBanner>
        </div>
        <h1 className="pageTitle">Trámite con el banco</h1>
        <h2 className="puntosClave">Puntos clave</h2>
        <div className="cardsAprendeBanco">
        <PuntosClaveBanco></PuntosClaveBanco>
        
        <h2 className="tutorialesCards">Tutoriales y recursos</h2>
        <TutorialesAprendeBanco></TutorialesAprendeBanco>



        </div>

    </section>
    </>
}