import videoBanco from "../../../assets/svg/aprendeScreen/svgIconsAprende/videoIcon.svg"
import documentoGuiaIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/documentoGuiaIcon.svg"
import "./tutorialFirma.css"

export const TutorialesAprendeFirma = () => {
    return <>

        <section className="tutorialesFirmaGeneralCards">
            <div className="tutorialesFirmaCard">
                <img src={videoBanco} alt="videoBanco" />
                <h3 className="video">Vídeo</h3>
                <h3 className="cardTutorialTitle">Paso a paso para firmar la escritura</h3>
                <p className="cardTutorialDescription">Descubre en minutos cómo es el proceso de firma: qué documentos llevar, qué pagos
                    hacer y cómo asegurarte de que tu propiedad quede registrada correctamente, sin complicaciones.</p>
                <button className="verAhora">Ver ahora</button>
            </div>

            <div className="tutorialesFirmaCard">
                <img src={documentoGuiaIcon} alt="documentoGuiaIcon" />
                <h3 className="documentoGuía">Documento/Guía</h3>
                <h3 className="cardTutorialTitle">Certificación laboral</h3>
                <p className="cardTutorialDescription">Aprende qué debe incluir tu certificación laboral, por qué es
                    clave para tu crédito hipotecario y cómo presentarla correctamente para evitar rechazos.</p>
                <button className="descargarGuia">Descargar Guía</button>
            </div>

        </section>
    </>
}