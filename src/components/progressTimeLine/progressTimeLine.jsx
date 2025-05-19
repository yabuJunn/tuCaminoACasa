import checkIcon from "../../assets//svgCheckIcon/check.svg"

export const ProgressTimeLine = () => {
	return <>
		<div id="progress-time-line">
        <h1>Línea de tiempo de tu proceso</h1>
		</div>
        
    <sesion className="checkSesion">

        <div className="generalStructureCheck">
                 <div className="checkImg">
                <img src={checkIcon} alt="checkIcon" />
            </div>
            
            <div className= "seleccionCheck">
            <h5 className="seleccion">Selección del inmueble</h5>
            </div>
         </div>
        
        <div className="generalStructureCheck">
             <div className="checkImg">
                <img src={checkIcon} alt="checkIcon" />
            </div>
            <div className= "separacionCheck">
            <h5 className="separacion">Separación del inmueble</h5>
        </div>
        </div>
        
         <div className="generalStructureCheck">
            <div className="checkImg">
                <img src={checkIcon} alt="checkIcon" />
            </div>
            <div className= "firmaCheck">
            <h5 className="firma"> Firma de documentación</h5>
        </div>
         </div>
         
        <div className="generalStructureCheck">
            <div className="checkImg">
                <img src={checkIcon} alt="checkIcon" />
            </div>
        <div className= "construccionCheck">
            <h5 className="construccion"> Construcción en curso</h5>
        </div>
        </div>

        

        <div className= "entregaCheck">
            <h5 className="entrega"> Entrega del inmueble</h5>
        </div>

        <div className= "escrituracionCheck">
            <h5 className="escrituración"> Escrituración </h5>
        </div>


    </sesion>

       
        
        

	</>
}