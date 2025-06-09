import mensaje from "../../../assets/svg/chatBot/mensaje.svg"
import alert from "../../../assets/svg/chatBot/alert.svg"
import documentos from "../../../assets/svg/chatBot/documentos.svg"
import asesor from "../../../assets/svg/chatBot/asesor.svg"
import "./botoneChat.css"

export const BotonesChat = () => {
    return (
      <div className="botonesContainer">
        <button className="mensajeButton">
          <img src={mensaje} alt="Icono" className="mensajeImg" />
          Preguntas Frecuentes
        </button>
  
        <button className="alertButton">
          <img src={alert} alt="Icono" className="alertImg" />
          Estatus del Proyecto
        </button>
  
        <button className="documentosButton">
          <img src={documentos} alt="Icono" className="documentosImg" />
          Documentos
        </button>
  
        <button className="asesorBtn">
          <img src={asesor} alt="Icono" className="asesorImg" />
          Chat con Asesor
        </button>
      </div>
    );
  };
  