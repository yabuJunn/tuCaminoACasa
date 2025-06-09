import { AprendeFirmaBanner } from "../../../components/aprendeScreen/aprendeFirmaBanner/aprendeFirmaBanner.jsx"
import { PuntosClaveFirma } from "../../../components/aprendeScreen/puntosClaveFirma/puntosClaveFirma.jsx"
import { TutorialesAprendeFirma } from "../../../components/aprendeScreen/tutorialesAprendeFirma/tutorialesAprendeFirma.jsx"

import { GlobalNavBar } from "../../../components/navigation/globalNavBar/globalNavBar"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"
import "./aprendeFirmaPage.css"



export const AprendeFirmaPage = () => {
    return <>

        <section className="aprendeFirmaPage">
            <GlobalNavBar></GlobalNavBar>
            <UpperNavButtons></UpperNavButtons>

            <AprendeFirmaBanner></AprendeFirmaBanner>
            <div className="bannerAprendeFirma">

            </div>

            <div className="firmaInfoExtra">
            <h1 className="pageFirmaTitle">Firma de la escritura</h1>
            <h2 className="puntosClaveFirma">Puntos clave</h2>
            <PuntosClaveFirma></PuntosClaveFirma>
            
            <div className="cardsAprendeFirma">
                <h2 className="tutorialesCardsFirma">Tutoriales y recursos</h2>
                <TutorialesAprendeFirma></TutorialesAprendeFirma>
            </div>
            </div>

        </section>
    </>
}