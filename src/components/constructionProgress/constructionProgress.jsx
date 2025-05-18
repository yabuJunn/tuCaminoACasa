import obraNegra from "../../assets/ImagenesDeContruccion/obraNegra.png"
import obraNegra2 from "../../assets/ImagenesDeContruccion/obraNegra2.png"
import obraNegra3 from "../../assets/ImagenesDeContruccion/obraNegra3.png"

import constructionIcon from "../../assets/svgIconConstruction/constructionIcon/constructionIcon.svg"
import graphicProgress from "../../assets/svgConstructionGraphic/graphicProgress/graphicProgress.svg"



export const ConstructionProgress = () => {
	return <>

        <div id="construction- progress">
        <h1>Progreso de la construcción</h1>
		</div>

        <section className="progressImgs">

        <div className="1-obraNegra">
            <img src={obraNegra} alt="constructionImg" />

            <div> 
                <img src={constructionIcon} alt="constructionIcon" />
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

            <div className="2-obraNegra">
            <img src={obraNegra2} alt="constructionImg" />

            <div> 
                <img src={constructionIcon} alt="constructionIcon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>
            </div>
        </div>

          <div className="3-obraNegra">
            <img src={obraNegra3} alt="constructionImg" />

            <div> 
                <img src={constructionIcon} alt="constructionIcon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>
            </div>
        </div>
            
        </section>

	</>
}