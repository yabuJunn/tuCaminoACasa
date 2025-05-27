import videoBanco from "../../assets/svgIconsAprende/videoIcon.svg"
import documentoGuiaIcon from "../../assets/svgIconsAprende/documentoGuiaIcon.svg"

export const TutorialesAprendeRegistro = () => {
    return<>

    <section className="tutorialesRegistroGeneralCards">
        <div  className="tutorialesRegistroCard">
                <img src={videoBanco} alt="videoBanco" />
                <h3 className="video">Vídeo</h3>
                <h3 className="cardTutorialTitle">Paso a paso para el registro</h3>
                <p className="cardTutorialDescription">Conoce paso a paso cómo registrar tu vivienda: qué documentos necesitas, cuánto cuesta y cómo 
                    asegurarte de que quedes legalmente inscrito como propietario. </p>
                </div>
                <button className="verAhora">Ver ahora</button>

                 <div  className="tutorialesFirmaCard">
                <img src={documentoGuiaIcon} alt="documentoGuiaIcon" />
                <h3 className="documentoGuía">Documento/Guía</h3>
                <h3 className="cardTutorialTitle">Guia de documentos para el registro</h3>
                <p className="cardTutorialDescription">Escritura, paz y salvo, y pagos — para completar el registro de tu
                     propiedad sin contratiempos.  </p>
                </div>
                <button className="descargarGuia">Descargar Guía</button>

                


                

    </section>
    </>
}