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
}