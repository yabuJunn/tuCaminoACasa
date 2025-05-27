import videoBanco from "../../assets/svgIconsAprende/videoIcon.svg"
import documentoGuiaIcon from "../../assets/svgIconsAprende/documentoGuiaIcon.svg"

export const TutorialesAprendeEntrega = () => {
    return<>

    <section className="tutorialesEntregaGeneralCards">
        <div  className="tutorialesEntregaCard">
                <img src={videoBanco} alt="videoBanco" />
                <h3 className="video">Vídeo</h3>
                <h3 className="cardTutorialTitle">Paso a paso para recibir tu vivienda</h3>
                <p className="cardTutorialDescription">Conoce qué revisar al momento de la entrega, cómo firmar el acta 
                    y qué hacer si encuentras detalles pendientes. </p>
                </div>
                <button className="verAhora">Ver ahora</button>

                 <div  className="tutorialesFirmaCard">
                <img src={documentoGuiaIcon} alt="documentoGuiaIcon" />
                <h3 className="documentoGuía">Documento/Guía</h3>
                <h3 className="cardTutorialTitle">Acta y entrega del inmueble</h3>
                <p className="cardTutorialDescription">Aprende qué incluye el acta de entrega, tus derechos como comprador 
                    y cómo asegurar que todo esté en orden antes de recibir las llaves.  </p>
                </div>
                <button className="descargarGuia">Descargar Guía</button>
                

    </section>
    </>
}