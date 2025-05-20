<<<<<<< HEAD
import "./constructionProgress.css"
import {
    CircularProgressbar,
    buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const constructionProgressMock = "Inst de servicios"
const percentage = 20;

export const ConstructionProgress = () => {
    return <>
        <div id="constructionProgressContainer">
            <h2>Progreso de la construcción</h2>

            <div id="constructionProgressProgressGraph">
                <CircularProgressbar
                    value={percentage}
                    maxValue={100}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        rotation: 0.75, // empieza en el lateral izquierdo
                        strokeLinecap: 'round',
                        trailColor: '#d6d6d6',
                        pathColor: '#2F80ED',
                        textColor: '#000',
                    })}
                    circleRatio={0.5}
                />
            </div>

            <div id="constructionProgressProgressText">
                <div id="constructionProgressProgressTextTitle">
                    <h3>Etapa actual</h3>
                    <p>{constructionProgressMock}</p>
                </div>

                <button id="constructionProgressNextStageButton">
                    {"Próximo paso >"}
                </button>
            </div>
        </div >
    </>
=======
import obraNegra from "../../assets/ImagenesDeContruccion/obraNegra.png"
import obraNegra2 from "../../assets/ImagenesDeContruccion/obraNegra2.png"
import obraNegra3 from "../../assets/ImagenesDeContruccion/obraNegra3.png"

import constructionIcon from "../../assets/svgIconConstruction/constructionIcon/constructionIcon.svg"
import graphicProgress from "../../assets/svgConstructionGraphic/graphicProgress/graphicProgress.svg"

import "../constructionProgress/constructionProgress.css"

export const ConstructionProgress = () => {
	return <>

        <section className="progressImgs">

        <div className="fObranegra">
            <img src={obraNegra} alt="constructionImg" />

            <div className="obraNegra"> 
                <img src={constructionIcon} alt="constructionIcon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>
            </div>
        </div>

         <div className="graphicProgress">
            <h2 className="graphicTitle">Progreso de la construcción</h2>

            <img src={graphicProgress} alt="graphicProgress" />
           
            <div className="content"> 
                <h2>Etapa actual</h2>
                <p>Instalación de servivicios</p>
            </div>
        </div>

            <div className="s-obraNegra">
            <img src={obraNegra2} alt="constructionImg" />

            <div className="obraNegra"> 
                <img src={constructionIcon} alt="constructionIcon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>
            </div>
        </div>

          <div className="t-obraNegra">
            <img src={obraNegra3} className="constructionImgt" />

            <div className="obraNegra"> 
                <img src={constructionIcon} alt="constructionIcon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>
            </div>
        </div>
            
        </section>

	</>
>>>>>>> origin/feature/enQueVoyStructure
}