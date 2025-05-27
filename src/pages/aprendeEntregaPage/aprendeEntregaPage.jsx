import { AprendeEntregaBanner } from "../../components/aprendeEntregaBanner/aprendeEntregaBanner"
import { PuntosClaveEntrega } from "../../components/puntosClaveEntrega/puntosClaveEntrega"
import { TutorialesAprendeEntrega } from "../../components/tutorialesAprendeEntrega/tutorialesAprendeEntrega"
import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar"
import { UpperNavButtons } from "../../components/upperNavButtons/upperNavButtons"



export const AprendeEntregaPage = () => {
    return<>

    <section className="aprendeEntregaPage">
        <GlobalNavBar></GlobalNavBar>
    <UpperNavButtons></UpperNavButtons>
        <div className="bannerAprendeEntrega">
            <AprendeEntregaBanner></AprendeEntregaBanner>

        
        </div>
        <h1 className="pageEntregaTitle">Entrega del inmueble</h1>
        <h2 className="puntosClaveEntrega">Puntos clave</h2>
        <PuntosClaveEntrega></PuntosClaveEntrega>
        <div className="cardsAprendeEntrega">
        
        <h2 className="tutorialesCardsEntrega">Tutoriales y recursos</h2>
        <TutorialesAprendeEntrega></TutorialesAprendeEntrega>



        </div>

    </section>
    </>
}