import ObraNegra from "../../assets/ImagenesDeContruccion/ObraNegra.png"
import ConstructionIcon from "../../assets/svgIconConstruction/constructionIcon/constructionIcon.svg"
import graphicProgress from "../../assets/svgConstructionGraphic/graphicProgress/graphicProgress.svg"



export const ConstructionProgress = () => {
	return <>

        <div id="construction- progress">
        <h1>Progreso de la construcción</h1>
		</div>

        <section className="progressImgs">
        <div className="1-obraNegra">
            <img src={ObraNegra} alt="constructionImg" />

            <div> 
                <img src={ConstructionIcon} alt="ConstructionIcon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>

            </div>
        </div>

         <div className="graphicProgress">
                                <h2>Progreso de la construcción</h2>

            <img src={graphicProgress} alt="graphicProgress" />
           
                    <h2>Etapa actual</h2>
                    <h4>Instalación de servivicios</h4>
        </div>
            
        </section>

	</>
}