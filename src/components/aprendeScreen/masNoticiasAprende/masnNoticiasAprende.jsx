import primera from "../../../assets/svg/aprendeScreen/masNoticiasImgs/primera.svg"
import segunda from "../../../assets/svg/aprendeScreen/masNoticiasImgs/segunda.svg"
import tercera from "../../../assets/svg/aprendeScreen/masNoticiasImgs/tercera.svg"
import cuarta from "../../../assets/svg/aprendeScreen/masNoticiasImgs/cuarta.svg"
import "./masnNoticiasAprende.css"

export const MasNoticiasAprende = () => {
    return <>

        <section className="masNoticiasGeneral">
            <h4 className="titleMas">Más noticias</h4>

            <div className="noticia1">
                <div className="imgNoticia">
                    <img src={primera} alt="primera" />
                </div>

                <div className="infoNoticias">
                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
                </div>
                
            </div>

            <div className="noticia2">
                <div className="imgNoticia">
                    <img src={segunda} alt="segunda" />
                </div>

                <div className="infoNoticias">
                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
                </div>
                
            </div>

            <div className="noticia3">
                <div className="imgNoticia">
                    <img src={tercera} alt="tercera" />
                </div>

                <div className="infoNoticias">
                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
                </div>
                
            </div>

            <div className="noticia4">
                <div className="imgNoticia">
                    <img src={cuarta} alt="cuarta" />
                </div>

                <div className="infoNoticias">
                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
                </div>
                
            </div>




        </section>


    </>
}