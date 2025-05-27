import videoBanco from "../../assets/svgIconsAprendeBanco/videoIcon.svg"

export const TutorialesAprendeBanco = () => {
    return<>

    <section className="tutorialesBancoGeneralCards">
        <div  className="turotialesBancoCard">
                <img src={videoBanco} alt="videoBanco" />
                <h3 className="video">Vídeo</h3>
                <h3 className="cardTutorialTitle">Paso a paso para solicitar tu crédito</h3>
                <p className="cardTutorialDescription">Aprende en minutos los pasos clave, requisitos y consejos para 
                    que tu solicitud de crédito hipotecario sea aprobada sin complicaciones. </p>
                </div>
                <button className="verAhora">Ver ahora</button>

                

    </section>
    </>
}