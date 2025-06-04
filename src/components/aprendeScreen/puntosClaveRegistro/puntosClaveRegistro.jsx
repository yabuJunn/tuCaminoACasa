import documentoRegistro from "../../../assets/svg/aprendeScreen/svgIconsAprende/documentoRegistro.svg"
import pagoIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/pagoIcon.svg"
import inscripcionIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/inscripcionIcon.svg"
import "./puntosClaveRegistro.css"

export const PuntosClaveRegistro = () => {
    return <>

        <section className="puntosClaveGeneralCardsRegistro">
            <div className="puntoClaveRegistroCard">
                <img src={documentoRegistro} alt="documentoRegistro" />
                <h3 className="cardPuntoTitleRegistro">Prepara los documentos</h3>
                <p className="cardPuntoDescriptionRegistro">Reúne certificados, escritura y pagos para registrar la propiedad sin retrasos.</p>
            </div>
            <div className="puntoClaveRegistroCard">
                <img src={pagoIcon} alt="pagoIcon" />
                <h3 className="cardPuntoTitleRegistro">Pago de derechos</h3>
                <p className="cardPuntoDescriptionRegistro">Realiza el pago de impuestos y derechos notariales para avanzar en el proceso.</p>
            </div>

            <div className="puntoClaveRegistroCard">
                <img src={inscripcionIcon} alt="inscripcionIcon" />
                <h3 className="cardPuntoTitleRegistro">Inscripción oficial</h3>
                <p className="cardPuntoDescriptionRegistro">Firma final para formalizar tu crédito y avanzar hacia tu nueva vivienda.</p>
            </div>

        </section>
    </>
}