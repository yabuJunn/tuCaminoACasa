import { AprendeRegistroBanner } from "../../components/aprendeRegsitroBanner/aprendeRegistroBanner"
import { PuntosClaveRegistro } from "../../components/puntosClaveRegistro/puntosClaveRegistro"

export const AprendeRegistroPage = () => {
    return<> 

    <section className="aprendeRegistroPage">
            
    
            <AprendeRegistroBanner></AprendeRegistroBanner>
            <div className="bannerAprendeFirma">
            
            </div>
            <h1 className="pageRegistroTitle">Firma de la escritura</h1>
            <h2 className="puntosClaveRegistro">Puntos clave</h2>
            <PuntosClaveRegistro></PuntosClaveRegistro>

            <div className="cardsAprendeRegistro">
            
            <h2 className="tutorialesCardsRegistro">Tutoriales y recursos</h2>
    
    
    
            </div>
            </section>
    
    </>
    }