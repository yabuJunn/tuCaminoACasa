import verificacionEntrega from "../../assets/svgIconsAprende/verificacionEntrega.svg"
import firmaEntrega from "../../assets/svgIconsAprende/firmaEntrega.svg"
import llavesEntrega from "../../assets/svgIconsAprende/llavesEntrega.svg"


export const PuntosClaveEntrega = () => {
    return<>

    <section className="puntosClaveGeneralCardsEntrega">
        <div  className="puntoClaveEntregaCard">
                        <img src={verificacionEntrega} alt="verificacionEntrega" />
                        <h3 className="cardPuntoTitleEntrega">Firma de la escritura</h3>
                        <p className="cardPuntoDescriptionEntrega">Carga el documento con tú firma de la escritura
                             para que la entrega del inmueble no tenga retrasos. </p>
                        </div>

        <div  className="puntoClaveEntregaCard">
                        <img src= {firmaEntrega} alt="firmaEntrega" />
                        <h3 className="cardPuntoTitleEntrega">Revisión del acuerdo final</h3>
                        <p className="cardPuntoDescriptionEntrega">Repasa las condiciones del contrato y asegúrate de que todo esté correcto. </p>
                        </div>

         <div  className="puntoClaveEntregaCard">
                        <img src={llavesEntrega} alt="llavesEntrega" />
                        <h3 className="cardPuntoTitleEntrega">Registro de propiedad</h3>
                        <p className="cardPuntoDescriptionEntrega">El trámite final: inscribir la escritura en la Oficina de Registro para
                            quedar como propietario legal. </p>
                        </div>
        
      
    </section>
    </>
}