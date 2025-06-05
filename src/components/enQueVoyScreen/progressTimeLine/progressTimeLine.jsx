import "../progressTimeLine/progressTimeLine.css";
import check from "../../../assets/svg/enQueVoyScreen/check.svg"

export const ProgressTimeLine = () => {
    return (
        <>
            <section className="checkSesion">
                <div id="progress-time-line">
                    <h1>Línea de tiempo de tu proceso</h1>
                </div>

                <div className="steps">
                    <div className="generalStructureCheck">
                        <div className="number verde">
                            <img src={check} alt="Check icon" />
                        </div>
                        <div className="seleccionCheck texto-verde">
                            <p className="texto-verde">Selección del inmueble</p>
                        </div>
                        </div>

                        <div className="generalStructureCheck">
                        <div className="number verde">
                            <img src={check} alt="Check icon" />
                        </div>
                        <div className="separacionCheck texto-verde">
                            <p className="texto-verde">Separación del inmueble</p>
                        </div>
                        </div>

                        <div className="generalStructureCheck">
                        <div className="number verde">
                            <img src={check} alt="Check icon" />
                        </div>
                        <div className="firmaCheck texto-verde">
                            <p className="texto-verde">Firma de documentación</p>
                        </div>
                        </div>

                        <div className="generalStructureCheck">
                        <div className="number amarillo">
                            <h4>4</h4>
                        </div>
                        <div className="construccionCheck texto-amarillo">
                            <p className="texto-amarillo">Construcción en curso</p>
                        </div>
                        </div>

                        <div className="generalStructureCheck">
                        <div className="number gris">
                            <h4>5</h4>
                        </div>
                        <div className="entregaCheck texto-gris">
                            <p className="texto-gris">Entrega del inmueble</p>
                        </div>
                        </div>

                        <div className="generalStructureCheck">
                        <div className="number gris">
                            <h4>6</h4>
                        </div>
                        <div className="escrituracionCheck texto-gris">
                            <p className="texto-gris">Escrituración</p>
                        </div>
                        </div>
 
                </div>
            </section>
        </>
    );
};