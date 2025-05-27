import verificacionEntrega from "../../../assets/svg/aprendeScreen/svgIconsAprende/verificacionEntrega.svg"
import firmaEntrega from "../../../assets/svg/aprendeScreen/svgIconsAprende/firmaEntrega.svg"
import llavesEntrega from "../../../assets/svg/aprendeScreen/svgIconsAprende/llavesEntrega.svg"

export const PuntosClaveEntrega = () => {
    return<>

    <section className="puntosClaveGeneralCardsEntrega">
        <div  className="puntoClaveEntregaCard">
                        <img src={verificacionEntrega} alt="verificacionEntrega" />
                        <h3 className="cardPuntoTitleEntrega">Firma de la escritura</h3>
                        <p className="cardPuntoDescriptionEntrega">Revisa que la vivienda cumpla con lo pactado y reporta detalles a corregir.</p>
                        </div>

        <div  className="puntoClaveEntregaCard">
                        <img src= {firmaEntrega} alt="firmaEntrega" />
                        <h3 className="cardPuntoTitleEntrega">Firma de acta de entrega</h3>
                        <p className="cardPuntoDescriptionEntrega">Firma el documento oficial donde recibes el inmueble en buen estado.</p>
                        </div>

         <div  className="puntoClaveEntregaCard">
                        <img src={llavesEntrega} alt="llavesEntrega" />
                        <h3 className="cardPuntoTitleEntrega">Entrega de llaves</h3>
                        <p className="cardPuntoDescriptionEntrega">Recibe las llaves y comienza a disfrutar de tu nuevo hogar.</p>
                        </div>
        
      
    </section>
    </>
}