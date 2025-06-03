import { AprendeRegistroBanner } from "../../../components/aprendeScreen/aprendeRegsitroBanner/aprendeRegistroBanner"
import { PuntosClaveRegistro } from "../../../components/aprendeScreen/puntosClaveRegistro/puntosClaveRegistro"
import { TutorialesAprendeRegistro } from "../../../components/aprendeScreen/tutorialesAprendeRegistro/tutorialesAprendeRegistro"
import { GlobalNavBar } from "../../../components/navigation/globalNavBar/globalNavBar"
import "./registroPage.css"

export const AprendeRegistroPage = () => {
    return <>

        <section className="aprendeRegistroPage">
            <GlobalNavBar></GlobalNavBar>

            <AprendeRegistroBanner></AprendeRegistroBanner>
           
           <div className="itemsRegistro">
            <h1 className="pageRegistroTitle">Registro de la escritura</h1>
            <h2 className="puntosClaveRegistro">Puntos clave</h2>
            <PuntosClaveRegistro></PuntosClaveRegistro>

            
            </div>

            <div className="cardsAprendeRegistro">
                <h2 className="tutorialesCardsRegistro">Tutoriales y recursos</h2>
                <TutorialesAprendeRegistro></TutorialesAprendeRegistro>
            </div>
        </section>

    </>
}