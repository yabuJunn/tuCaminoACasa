import { AprendeEntregaBanner } from "../../../components/aprendeScreen/aprendeEntregaBanner/aprendeEntregaBanner"
import { PuntosClaveEntrega } from "../../../components/aprendeScreen/puntosClaveEntrega/puntosClaveEntrega"
import { TutorialesAprendeEntrega } from "../../../components/aprendeScreen/tutorialesAprendeEntrega/tutorialesAprendeEntrega"
import { GlobalNavBar } from "../../../components/navigation/globalNavBar/globalNavBar"
import "./entrega.css"

export const AprendeEntregaPage = () => {
    return <>

        <section className="aprendeEntregaPage">
            <GlobalNavBar></GlobalNavBar>
           
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