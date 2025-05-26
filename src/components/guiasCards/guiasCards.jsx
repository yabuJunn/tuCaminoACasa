import bancoIcon from "../../assets/guiasCardsIcons/banco.svg"
import firmaIcon from "../../assets/guiasCardsIcons/firma.svg"
import registroIcon from "../../assets/guiasCardsIcons/registro.svg"
import entregaIcon from "../../assets/guiasCardsIcons/entrega.svg"
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
        <p className="CardGuiaDescription">Aprende qué incluye este documento legal, 
            cómo prepararte para firmar y qué sucede después.</p>
        <button className="cardGuiaButton"> Ver más detalles</button>
        </div>

        <div registroCard className="registro">
            <img src={registroIcon} alt="registroIcon" />
        <h3 className="cardGuiaTitle">Registro</h3>
        <p className="CardGuiaDescription">Descubre cómo se registra legalmente la propiedad a tu nombre y cuánto puede tardar este proceso.</p>
        <button className="cardGuiaButton"> Ver más detalles</button>
        </div>

          <div entregaCard className="entrega">
            <img src={entregaIcon} alt="entregaIcon" />
        <h3 className="cardGuiaTitle">Entrega del inmueble</h3>
        <p className="CardGuiaDescription">Infórmate sobre cómo es la entrega de tu vivienda, qué revisar ese día y cómo reportar detalles a corregir.</p>
        <button className="cardGuiaButton"> Ver más detalles</button>
        </div>

    </div>

    )
}