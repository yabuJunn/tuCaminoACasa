//import checkIcon from "../../assets//svgCheckIcon/check.svg"
import "../progressTimeLine/progressTimeLine.css"

export const ProgressTimeLine = () => {
	return <>
		
        
    <sesion className="checkSesion">
        <div id="progress-time-line">
            <h1>Línea de tiempo de tu proceso</h1>
		</div>
        <div className="steps">
        <div className="generalStructureCheck">
            <div className="number check">
                <h4>1</h4>
            </div>
            
            <div className= "seleccionCheck">
            <p className="seleccion">Selección del inmueble</p>
            </div>
         </div>
        
        <div className="generalStructureCheck">
            <div className="number check">
                <h4>2</h4>
            </div>
            <div className= "separacionCheck">
            <p className="separacion">Separación del inmueble</p>
        </div>
        </div>
        
         <div className="generalStructureCheck">
            <div className="number check">
                <h4>3</h4>
            </div>
            <div className= "firmaCheck">
            <p className="firma"> Firma de documentación</p>
        </div>
         </div>
         
        <div className="generalStructureCheck">
            <div className="number">
                <h4>4</h4>
            </div>
        <div className= "construccionCheck">
            <p className="construccion"> Construcción en curso</p>
        </div>
        </div>


         <div className="generalStructureCheck">
            <div className="number">
                <h4>5</h4>
            </div>
            <div className= "entregaCheck">
                <p className="entrega"> Entrega del inmueble</p>
            </div>
        </div>

        <div className="generalStructureCheck">
            <div className="number">
                <h4>6</h4>
            </div>
        <div className= "escrituracionCheck">
            <p className="escrituración"> Escrituración </p>
        </div>
        </div>


        </div>
    </sesion>

       
        
        

	</>
}