import primera from "../../../assets/svg/aprendeScreen/masNoticiasImgs/primera.svg"
import segunda from "../../../assets/svg/aprendeScreen/masNoticiasImgs/segunda.svg"
import tercera from "../../../assets/svg/aprendeScreen/masNoticiasImgs/tercera.svg"
import cuarta from "../../../assets/svg/aprendeScreen/masNoticiasImgs/cuarta.svg"
import "./noticiasColumn.css"

export const MasNoticiasAprende = () => {
    return (
        <section className="masNoticiasContainer">
            <h4 className="masNoticiasTituloSeccion">Más noticias</h4>

            <div className="masNoticiaItem">
                <div className="masNoticiaImagen">
                    <img src={primera} alt="primera" />
                </div>
                <div>
                    <h3 className="masNoticiaTitulo">Entrega de viviendas en Jamundí</h3>
                    <h2 className="masNoticiaFecha">Hace 1 día</h2>
                </div>
            </div>

            <div className="masNoticiaItem">
                <div className="masNoticiaImagen">
                    <img src={segunda} alt="segunda" />
                </div>
                <div>
                    <h3 className="masNoticiaTitulo">Entrega de viviendas en Jamundí</h3>
                    <h2 className="masNoticiaFecha">Hace 1 día</h2>
                </div>
            </div>

            <div className="masNoticiaItem">
                <div className="masNoticiaImagen">
                    <img src={tercera} alt="tercera" />
                </div>
                <div>
                    <h3 className="masNoticiaTitulo">Entrega de viviendas en Jamundí</h3>
                    <h2 className="masNoticiaFecha">Hace 1 día</h2>
                </div>
            </div>

            <div className="masNoticiaItem">
                <div className="masNoticiaImagen">
                    <img src={cuarta} alt="cuarta" />
                </div>
                <div>
                    <h3 className="masNoticiaTitulo">Entrega de viviendas en Jamundí</h3>
                    <h2 className="masNoticiaFecha">Hace 1 día</h2>
                </div>
            </div>
        </section>
    )
}
