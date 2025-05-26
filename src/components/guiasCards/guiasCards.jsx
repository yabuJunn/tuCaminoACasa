import bancoIcon from "../../assets/guiasCardsIcons/banco.svg"
import firmaIcon from "../../assets/guiasCardsIcons/firma.svg"

export const GuiaCards =({ icon, title, description })=>{
    return(
        <div className="GuiaCards">

        <div bancoCard className="banco">
            <img src={bancoIcon} alt="bancoIcon" />
        <h3 className="cardGuiaTitle">Trámite con el banco</h3>
        <p className="CardGuiaDescription">Conoce cómo solicitar tu crédito hipotecario y 
            qué documentos necesitas para que sea aprobado sin contratiempos.</p>
        <button className="cardGuiaButton"> Ver más detalles</button>
        </div>

         <div firmaCard className="firma">
            <img src={firmaIcon} alt="firmaIcon" />
        <h3 className="cardGuiaTitle">Firma de la escritura</h3>
        <p className="CardGuiaDescription">CAprende qué incluye este documento legal, 
            cómo prepararte para firmar y qué sucede después.</p>
        <button className="cardGuiaButton"> Ver más detalles</button>
        </div>

    </div>

    )
}