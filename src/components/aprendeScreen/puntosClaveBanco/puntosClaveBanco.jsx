import documentoIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/documentoIcon.svg"
import revisionIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/revisionIcon.svg"
import firmaIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/firmaIcon.svg"

export const PuntosClaveBanco = () => {
    return <>

        <section className="puntosClaveGeneralCards">
            <div className="puntoClaveCard">
                <img src={documentoIcon} alt="documentoIcon" />
                <h3 className="cardPuntoTitle">Sube los documentos</h3>
                <p className="cardPuntoDescription">Carga tus documentos clave para arrancar el trámite hipotecario sin retrasos.</p>
            </div>

            <div className="puntoClaveCard">
                <img src={revisionIcon} alt="revisionIcon" />
                <h3 className="cardPuntoTitle">Revisión del banco</h3>
                <p className="cardPuntoDescription">El banco verifica tus datos y documentos para dar luz verde al crédito.</p>
            </div>

            <div className="puntoClaveCard">
                <img src={firmaIcon} alt="firmaIcon" />
                <h3 className="cardPuntoTitle">Firma hipoteca</h3>
                <p className="cardPuntoDescription">Firma final para formalizar tu crédito y avanzar hacia tu nueva vivienda.</p>
            </div>

        </section>
    </>
}