import "./constructionSteps.css"

export const ConstructionSteps = () => {
	return <>
		
        <div className="stepsInfo">
            <div id="construction-steps">
                <h1>Etapas de la construccion</h1>
            </div>
            <section className="descriptionColumn">
            <div className="stepsRows">
                <div className="number"> 1 </div>
                <div className="generalStructureDescription">
                    <div className="completado"> Completado </div>
                    <div className="title"> Preparación del terreno </div>
                    <div className="description"> Se limpia y nivela el lote donde se construirá el proyecto, incluyendo estudios del suelo y adecuación del espacio. </div>
                </div>
            </div>

            <div className="stepsRows">
                <div className="number"> 2 </div>
                <div className="generalStructureDescription">
                    <div className="completado"> Completado </div>
                    <div className="title"> Cimentación </div>
                    <div className="description"> Se construyen las bases que soportarán la estructura del edificio, como zapatas, pilotes o losas de cimentación.</div>
                </div>
            </div>

            <div className="stepsRows">  
                <div className="number"> 3 </div>
                <div className="generalStructureDescription">
                    <div className="completado"> Completado </div>
                    <div className="title"> Estructura </div>
                    <div className="description"> Se levantan columnas, vigas y placas que conforman el esqueleto de la edificación. </div>
                </div>
            </div>

            <div className="stepsRows">
                <div className="number"> 4 </div>
                <div className="generalStructureDescription">
                    <div className="completado"> Completado </div>
                    <div className="title"> Estructura </div>
                    <div className="description"> Instalaciones de servicios </div>
                </div>
            </div>
            </section>
        </div>
        

	</>
}