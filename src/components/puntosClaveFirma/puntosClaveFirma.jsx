import firmaIconOrange from "../../assets/svgIconsAprende/firmaIconOrange.svg"
import glassesIcon from "../../assets/svgIconsAprende/glassesIcon.svg"
import homeIcon from "../../assets/svgIconsAprende/homeIcon.svg"


export const PuntosClaveFirma = () => {
    return<>

    <section className="puntosClaveGeneralCardsFirma">
        <div  className="puntoClaveFirmaCard">
                        <img src={firmaIconOrange} alt="firmaIconOrange" />
                        <h3 className="cardPuntoTitleFirma">Firma de la escritura</h3>
                        <p className="cardPuntoDescriptionFirma">Carga el documento con tú firma de la escritura
                             para que la entrega del inmueble no tenga retrasos. </p>
                        </div>

        <div  className="puntoClaveFirmaCard">
                        <img src={glassesIcon} alt="glassesIcon" />
                        <h3 className="cardPuntoTitleFirma">Firma de la escritura</h3>
                        <p className="cardPuntoDescriptionFirma">Carga el documento con tú firma de la escritura
                             para que la entrega del inmueble no tenga retrasos. </p>
                        </div>

         <div  className="puntoClaveFirmaCard">
                        <img src={homeIcon} alt="homeIcon" />
                        <h3 className="cardPuntoTitleFirma">Firma de la escritura</h3>
                        <p className="cardPuntoDescriptionFirma">Carga el documento con tú firma de la escritura
                             para que la entrega del inmueble no tenga retrasos. </p>
                        </div>
        
      
    </section>
    </>
}