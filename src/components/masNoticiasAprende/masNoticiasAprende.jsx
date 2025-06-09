import iconBack from "../../assets/svgIconsAprende/iconBack.svg"
import primera from "../../assets/masNoticiasImgs/primera.svg"
import segunda from "../../assets/masNoticiasImgs/segunda.svg"
import tercera from "../../assets/masNoticiasImgs/tercera.svg"
import cuarta from "../../assets/masNoticiasImgs/cuarta.svg"

export const MasNoticiasAprende = () => {
    return <>

        <section className="masNoticiasGeneral">
            <h4 className="titleMas">Más noticias</h4>

            <div className="noticia">
                <div className="imgNoticia">
                    <img src={primera} alt="primera" />
                </div>

                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
            </div>

            <div className="noticia">
                <div className="imgNoticia">
                    <img src={segunda} alt="segunda" />
                </div>

                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
            </div>

            <div className="noticia">
                <div className="imgNoticia">
                    <img src={tercera} alt="tercera" />
                </div>

                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
            </div>

            <div className="noticia">
                <div className="imgNoticia">
                    <img src={cuarta} alt="cuarta" />
                </div>
                <h3 className="titleNoticia">Entrega de viviendas en Jamundí</h3>
                <h2 className="diaNoticia">Hace 1 día</h2>
            </div>
        </section>
    </>
}