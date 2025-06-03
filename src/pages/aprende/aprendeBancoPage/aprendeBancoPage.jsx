import "./aprendeBanco.css"

import { AprendeBancoBanner } from "../../../components/aprendeScreen/aprendeBancoBanner/aprendeBancoBanner"
import { PuntosClaveBanco } from "../../../components/aprendeScreen/puntosClaveBanco/puntosClaveBanco"
import { TutorialesAprendeBanco } from "../../../components/aprendeScreen/tutorialesAprendeBanco/tutorialesAprendeBanco"
import { GlobalNavBar } from "../../../components/navigation/globalNavBar/globalNavBar"

export const AprendeBancoPage = () => {
    return <>

        <section className="aprendeBancoPage">

            <div className="globalNavBarBanco">
                <GlobalNavBar></GlobalNavBar>
            </div>

            <div className="bannerAprendeBanco">
                <AprendeBancoBanner></AprendeBancoBanner>
            </div>

            <div className="bancoInfoExtra">
                <h1 className="pageTitle">Trámite con el banco</h1>
                <h2 className="puntosClave">Puntos clave</h2>
                <div className="cardsAprendeBanco">
                    <PuntosClaveBanco></PuntosClaveBanco>
                </div>

            </div>

            <h2 className="tutorialesCards">Tutoriales y recursos</h2>
            <TutorialesAprendeBanco></TutorialesAprendeBanco>
        </section >
    </>
}