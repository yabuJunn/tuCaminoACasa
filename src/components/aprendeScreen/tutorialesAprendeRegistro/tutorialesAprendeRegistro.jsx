import videoBanco from "../../../assets/svg/aprendeScreen/svgIconsAprende/videoIcon.svg"
import documentoGuiaIcon from "../../../assets/svg/aprendeScreen/svgIconsAprende/documentoGuiaIcon.svg"
import "./tutorialRegistro.css"

export const TutorialesAprendeRegistro = () => {
    return <>

        <section className="tutorialesBancoGeneralCards">

            <div className="tutorialesBancoCard">
                <img src={videoBanco} alt="videoBanco" />
                <h3 className="video">Vídeo</h3>
                <h3 className="cardTutorialTitle">Paso a paso para el registro</h3>
                <p className="cardTutorialDescription">Conoce paso a paso cómo registrar tu vivienda: qué documentos necesitas, cuánto cuesta y cómo
                    asegurarte de que quedes legalmente inscrito como propietario.</p>
                <button className="verAhora">Ver ahora</button>
            </div>

            <div className="tutorialesFirmaCard">
                <img src={documentoGuiaIcon} alt="documentoGuiaIcon" />
                <h3 className="documentoGuía">Documento/Guía</h3>
                <h3 className="cardTutorialTitle">Guia de documentos para el registro</h3>
                <p className="cardTutorialDescription">Escritura, paz y salvo, y pagos — para completar el registro de tu
                    propiedad sin contratiempos.</p>
                <button className="descargarGuia">Descargar Guía</button>
            </div>






        </section>
    </>
}