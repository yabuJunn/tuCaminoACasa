import { AprendeFirmaBanner } from "../../components/aprendeFirmaBanner/aprendeFirmaBanner.jsx"
import { PuntosClaveFirma } from "../../components/puntosClaveFirma/puntosClaveFirma.jsx"
import { TutorialesAprendeFirma } from "../../components/tutorialesAprendeFirma/tutorialesAprendeFirma.jsx"

import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar.jsx"
import { UpperNavButtons } from "../../components/upperNavButtons/upperNavButtons.jsx"



export const AprendeFirmaPage = () => {
    return<>

    <section className="aprendeFirmaPage">
          <GlobalNavBar></GlobalNavBar>
        <UpperNavButtons></UpperNavButtons>

        <AprendeFirmaBanner></AprendeFirmaBanner>
        <div className="bannerAprendeFirma">
        
        </div>
        <h1 className="pageFirmaTitle">Firma de la escritura</h1>
        <h2 className="puntosClaveFirma">Puntos clave</h2>
        <PuntosClaveFirma></PuntosClaveFirma>
        <div className="cardsAprendeFirma">
        <TutorialesAprendeFirma></TutorialesAprendeFirma>
        
        <h2 className="tutorialesCardsFirma">Tutoriales y recursos</h2>



        </div>

    </section>
    </>
}