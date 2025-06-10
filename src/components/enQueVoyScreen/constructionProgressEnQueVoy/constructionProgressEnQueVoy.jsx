import "./constructionProgressEnQueVoy.css"

import obraNegra from "../../../assets/png/enQueVoyScreen/ObraNegra.png"
import obraNegra2 from "../../../assets/png/enQueVoyScreen/obraNegra2.png"
import obraNegra3 from "../../../assets/png/enQueVoyScreen/ObraNegra3.png"

import constructionIcon from "../../../assets/svg/enQueVoyScreen/constructionIcon.svg"
import graphicProgress from "../../../assets/svg/enQueVoyScreen/graphicProgress.svg"


export const ConstructionProgressEnQueVoy = () => {
    return <>

        <section className="progressImgs">

            <div className="primeraParte">
            <div className="obraNegra1"
                style={{ backgroundImage: `url(${obraNegra})` }}
            >
            <div className="content1">
                <img src={constructionIcon} alt="construction icon" />
                <div className="description">
                <h4>Etapa actual</h4>
                <h2>Obra negra</h2>
                </div>
            </div>
            </div>


            <div className="graphicProgress">
                <h2 className="graphicTitle">Progreso de la construcción</h2>

                <img src={graphicProgress} alt="graphicProgress" />

                <div className="content2">
                    <h2>Etapa actual</h2>
                    <p>Instalación de servivicios</p>
                </div>
            </div>
            </div>

                        <div className="segundaParte">
            {/* Primer bloque - 40% */}
            <div
                className="obraNegra bloqueIzquierdo"
                style={{ backgroundImage: `url(${obraNegra2})` }}
            >
                <div className="content">
                <img src={constructionIcon} alt="construction icon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>
                </div>
            </div>

            {/* Segundo bloque - 60% */}
            <div
                className="obraNegra bloqueDerecho"
                style={{ backgroundImage: `url(${obraNegra3})` }}
            >
                <div className="content">
                <img src={constructionIcon} alt="construction icon" />
                <div className="description">
                    <h4>Etapa actual</h4>
                    <h2>Obra negra</h2>
                </div>
                </div>
            </div>
            </div>


        </section>

    </>
}