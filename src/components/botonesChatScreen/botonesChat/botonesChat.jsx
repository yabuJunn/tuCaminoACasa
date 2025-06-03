import mensaje from "../../../assets/svg/chatBot/mensaje.svg"
import alert from "../../../assets/svg/chatBot/alert.svg"
import documentos from "../../../assets/svg/chatBot/documentos.svg"
import asesor from "../../../assets/svg/chatBot/asesor.svg"

export const BotonesChat =()=>{
    return(
        <div>
            <button className="mensajeButton">
<img src={mensaje} alt="Icono" className="mensajeImg" />    
            Preguntas Frecuentes</button>

            <button className="alertButton">
<img src={alert} alt="Icono" className="alertImg" />    
            Estatus del proyecto</button>

            <button className="documentosButton">
<img src={documentos} alt="Icono" className="documentosImg" />    
            Documentos</button>

            <button className="asesor">
<img src={asesor} alt="Icono" className="asesorImg" />    
            Chat con asesor</button>
        </div>


        
    )
}