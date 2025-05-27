import "./constructionProgressEnQueVoy.css"

import obraNegra from "../../../assets/png/enQueVoyScreen/ObraNegra.png"
import obraNegra2 from "../../../assets/png/enQueVoyScreen/ObraNegra2.png"
import obraNegra3 from "../../../assets/png/enQueVoyScreen/ObraNegra3.png"

import constructionIcon from "../../../assets/svg/enQueVoyScreen/constructionIcon.svg"
import graphicProgress from "../../../assets/svg/enQueVoyScreen/graphicProgress.svg"


export const ConstructionProgressEnQueVoy = () => {
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
}