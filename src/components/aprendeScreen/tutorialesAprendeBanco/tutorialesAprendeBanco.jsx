// import videoBanco from "../../assets/svgIconsAprende/videoIcon.svg"
// import documentoGuiaIcon from "../../assets/svgIconsAprende/documentoGuiaIcon.svg"
import videoBanco from "../../../assets/svg/aprendeScreen/svgIconsAprende/videoIcon.svg"
import documentoGuiaIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/documentoGuiaIcon.svg"
import "./tutorialBanco.css"

export const TutorialesAprendeBanco = () => {
    return <>

        <section className="tutorialesBancoGeneralCards">
            <div className="tutorialesBancoCard">
                <img src={videoBanco} alt="videoBanco" />
                <h3 className="video">Vídeo</h3>
                <h3 className="cardTutorialTitle">Paso a paso para solicitar tu crédito</h3>
                <p className="cardTutorialDescription">Aprende en minutos los pasos clave, requisitos y consejos para que tu solicitud de crédito hipotecario sea aprobada sin complicaciones.</p>
                <button className="verAhora">Ver ahora</button>
            </div>

            <div className="tutorialesBancoCard">
                <img src={documentoGuiaIcon} alt="documentoGuiaIcon" />
                <h3 className="documentoGuía">Documento/Guía</h3>
                <h3 className="cardTutorialTitle">Certificación laboral</h3>
                <p className="cardTutorialDescription">Este documento debe incluir tu cargo, salario, tipo de contrato y antigüedad laboral. Es esencial para que las entidades financieras evalúen tu capacidad de pago al solicitar un crédito hipotecario.</p>
                <button className="descargarGuia">Descargar Guía</button>
            </div>

        </section>
    </>
}