import firmaIconOrange from "../../../assets/svg/aprendeScreen/svgIconsAprende/firmaIconOrange.svg"
import glassesIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/glassesIcon.svg"
import homeIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/homeIcon.svg"


export const PuntosClaveFirma = () => {
    return <>

        <section className="puntosClaveGeneralCardsFirma">
            <div className="puntoClaveFirmaCard">
                <img src={firmaIconOrange} alt="firmaIconOrange" />
                <h3 className="cardPuntoTitleFirma">Firma de la escritura</h3>
                <p className="cardPuntoDescriptionFirma">Carga el documento con tú firma de la escritura
                    para que la entrega del inmueble no tenga retrasos.</p>
            </div>

            <div className="puntoClaveFirmaCard">
                <img src={glassesIcon} alt="glassesIcon" />
                <h3 className="cardPuntoTitleFirma">Revisión del acuerdo final</h3>
                <p className="cardPuntoDescriptionFirma">Repasa las condiciones del contrato y asegúrate de que todo esté correcto.</p>
            </div>

            <div className="puntoClaveFirmaCard">
                <img src={homeIcon} alt="homeIcon" />
                <h3 className="cardPuntoTitleFirma">Registro de propiedad</h3>
                <p className="cardPuntoDescriptionFirma">El trámite final: inscribir la escritura en la Oficina de Registro para
                    quedar como propietario legal.</p>
            </div>


        </section>
    </>
}